import React from "react";
import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [expense, setExpense] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [investment, setInvestment] = useState("");
  const [investmentDescription, setInvestmentDescription] = useState("");

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    if (expense && expenseDescription) {
      console.log("Expense Value:", expense);
      console.log("Expense Description:", expenseDescription);
      // Add Firebase logic here later
      setExpense("");
      setExpenseDescription("");
    } else {
      alert("Please fill in both expense fields");
    }
  };

  const handleInvestmentSubmit = (e) => {
    e.preventDefault();
    if (investment && investmentDescription) {
      console.log("Investment Amount:", investment);
      console.log("Investment Description:", investmentDescription);
      // Add Firebase logic here later
      setInvestment("");
      setInvestmentDescription("");
    } else {
      alert("Please fill in both investment fields");
    }
  };

  const getCurrentDate = () => {
    const today = new Date(); // Get current date

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };

  // console.log(getCurrentDate());

  return (
    <>
      <div className="scrolling-text-container">
        <p className="user-name">Welcome, Prathmesh Adsod</p>
      </div>

      <div className="user-basic-details">
        <p>Income: 10000000 Rs. year</p>
        <p>Savings: 200000 Rs.</p>
        <p>Expenditure: 300000 Rs.</p>
        <p>Investments: 500000 Rs.</p>
      </div>

      <div className="expense-investment-container">
        <div className="form-section">
          <div className="form-container">
            <h3>Add Your Expenses</h3>
            <form className="expense-form" onSubmit={handleExpenseSubmit}>
              <div className="form-group">
                <label htmlFor="expense">Expense Value</label>
                <input
                  type="number"
                  id="expense"
                  placeholder="Enter expense amount"
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="expense-description">Expense Description</label>
                <input
                  type="text"
                  id="expense-description"
                  placeholder="Enter description"
                  value={expenseDescription}
                  onChange={(e) => setExpenseDescription(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Add Expense
              </button>
            </form>
          </div>

          

          <div className="form-container">
            <h3>Add Your Investments</h3>
            <form className="investment-form" onSubmit={handleInvestmentSubmit}>
              <div className="form-group">
                <label htmlFor="investment">Investment Amount</label>
                <input
                  type="number"
                  id="investment"
                  placeholder="Enter investment amount"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="investment-description">
                  Investment Description
                </label>
                <input
                  type="text"
                  id="investment-description"
                  placeholder="Enter description"
                  value={investmentDescription}
                  onChange={(e) => setInvestmentDescription(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Add Investment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
