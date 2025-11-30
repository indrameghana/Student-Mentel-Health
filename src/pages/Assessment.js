import React, { useState } from 'react';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "How often do you feel overwhelmed by daily tasks?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How well are you sleeping lately?",
      options: ["Very well", "Well", "Okay", "Poorly", "Very poorly"]
    },
    {
      question: "How often do you feel anxious or worried?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How connected do you feel to friends and family?",
      options: ["Very connected", "Connected", "Neutral", "Disconnected", "Very disconnected"]
    },
    {
      question: "How would you rate your energy levels?",
      options: ["Very high", "High", "Normal", "Low", "Very low"]
    },
    {
      question: "How often do you experience mood swings?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Very often"]
    },
    {
      question: "How difficult is it for you to concentrate on tasks?",
      options: ["Very easy", "Easy", "Moderate", "Difficult", "Very difficult"]
    },
    {
      question: "How often do you feel sad or depressed?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: "How well do you handle stress?",
      options: ["Very well", "Well", "Okay", "Poorly", "Very poorly"]
    },
    {
      question: "How satisfied are you with your current life situation?",
      options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
    },
    {
      question: "How often do you engage in activities you enjoy?",
      options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"]
    },
    {
      question: "How would you rate your self-esteem?",
      options: ["Very high", "High", "Average", "Low", "Very low"]
    }
  ];

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const total = answers.reduce((sum, answer) => sum + answer, 0);
    const percentage = ((total / (questions.length * 4)) * 100).toFixed(0);
    
    if (percentage <= 30) {
      return {
        level: "Good",
        color: "#10b981",
        message: "Your mental stability appears to be in a good range. Keep up the healthy habits!",
        suggestions: ["Continue regular exercise", "Maintain social connections", "Keep a consistent sleep schedule"]
      };
    } else if (percentage <= 60) {
      return {
        level: "Moderate",
        color: "#f59e0b",
        message: "You may be experiencing some stress. Consider implementing stress management techniques.",
        suggestions: ["Try meditation or mindfulness", "Talk to someone you trust", "Consider professional support"]
      };
    } else {
      return {
        level: "Needs Attention",
        color: "#ef4444",
        message: "It might be helpful to speak with a mental health professional for additional support.",
        suggestions: ["Schedule a therapy session", "Reach out to support groups", "Contact a counselor or therapist"]
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = calculateResult();
    return (
      <>
        <section className="page-header">
          <div className="container">
            <h1>Mental Stability Assessment</h1>
            <p>Your personalized mental health evaluation results</p>
          </div>
        </section>

        <section className="assessment-result">
          <div className="container">
            <div className="result-card">
              <div className="result-header" style={{ borderColor: result.color }}>
                <div className="result-icon" style={{ backgroundColor: result.color }}>
                  {result.level === "Good" ? "😊" : result.level === "Moderate" ? "😐" : "😟"}
                </div>
                <h2 style={{ color: result.color }}>Mental Stability: {result.level}</h2>
              </div>
              
              <div className="result-message">
                <p>{result.message}</p>
              </div>

              <div className="suggestions">
                <h3>Recommended Actions:</h3>
                <ul>
                  {result.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>

              <div className="result-actions">
                <button onClick={resetAssessment} className="btn btn-primary">
                  Take Assessment Again
                </button>
                <button className="btn btn-secondary" onClick={() => window.location.href = '/therapy'}>
                  Book Therapy Session
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Mental Stability Check</h1>
          <p>A quick assessment to understand your current mental well-being</p>
        </div>
      </section>

      <section className="assessment">
        <div className="container">
          <div className="assessment-card">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </div>

            <div className="question">
              <h3>{questions[currentQuestion].question}</h3>
            </div>

            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assessment;