import React, { useState } from 'react';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    amount: '50'
  });

  const handleChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment processed successfully! 💳✅');
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>💳 Payment Gateway</h1>
          <p>Secure payment for premium therapy sessions</p>
        </div>
      </section>

      <section className="payment">
        <div className="container">
          <div className="payment-card">
            <h3>Premium Therapy Session</h3>
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">{paymentData.amount}</span>
              <span className="period">/session</span>
            </div>
            
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="3"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-primary full-width">
                🔒 Pay ${paymentData.amount}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;