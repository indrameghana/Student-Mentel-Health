import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Captcha = ({ onVerify }) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setUserInput('');
    setIsVerified(false);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const verifyCaptcha = () => {
    if (userInput.toUpperCase() === captchaCode) {
      setIsVerified(true);
      onVerify(true);
    } else {
      alert('Incorrect captcha. Please try again.');
      generateCaptcha();
      onVerify(false);
    }
  };

  return (
    <div className="captcha-container">
      <label>Verify you're human</label>
      <div className="captcha-display">
        <span className="captcha-code">{captchaCode}</span>
        <button type="button" onClick={generateCaptcha} className="refresh-btn">
          🔄
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter captcha code"
        maxLength={5}
      />
      <button type="button" onClick={verifyCaptcha} className="verify-btn">
        Verify
      </button>
      {isVerified && <span className="verified">✅ Verified</span>}
    </div>
  );
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'user'
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify the captcha first.');
      return;
    }
    if (formData.userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome to MindCare</h1>
          <p>Sign in to access the platform</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="userType">Login As</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="user">👤 Student/User</option>
              <option value="admin">🔧 Admin</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group">
            <Captcha onVerify={setCaptchaVerified} />
          </div>

          <button type="submit" className="btn btn-primary full-width">
            {formData.userType === 'admin' ? 'Login as Admin' : 'Login as Student'}
          </button>
        </form>

        <div className="login-footer">
          <p style={{fontSize: '0.9rem', color: '#64748b'}}>
            Demo: Use any email/password to access
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;