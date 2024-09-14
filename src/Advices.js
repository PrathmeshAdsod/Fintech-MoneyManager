import React, { useState } from 'react';
import './Advices.css';

const Advices = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    /* Actual API caall from hugging face will goe here */
    setTimeout(() => {
      const mockResponse = `Based on your financial goals: "${input}", we suggest you diversify your investments in stocks, bonds, and real estate. Set aside 10% of your income for savings each month.`;
      setAdvice(mockResponse);
      setLoading(false);
    }, 2000); 
  };

  return (
    <div className="advice-page">
      <h1 className="heading">We are here to advise you</h1>
      <p className="subheading">
        Share your financial goals and plans with us. We'll provide personalized advice to help you achieve them.
      </p>
      <form className="advice-form" onSubmit={handleSubmit}>
        <textarea
          className="prompt-box"
          placeholder="Describe your financial goals, plans, or questions..."
          value={input}
          onChange={handleInputChange}
        />
        <button className="submit-button" type="submit">
          {loading ? 'Getting Advice...' : 'Ask for Advice'}
        </button>
      </form>

      {/* Displaying the advice received from LLM */}
      {advice && (
        <div className="response-section">
          <h2 className="response-heading">Your Personalized Advice</h2>
          <p className="response-text">{advice}</p>
        </div>
      )}
    </div>
  );
};

export default Advices;
