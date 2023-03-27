import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const titleOnChangeHandler = (event) => {
    //console.log(event);
    //console.log(event.target.value);
    setCurrentTitle(event.target.value);
  };

  const amountOnChangeHandler = (event) => {
    setCurrentAmount(event.target.value);
  };

  const dateOnChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  const formSubmition = (event) => {
    event.preventDefault();
    const expenseData = {
      title: currentTitle,
      amount: currentAmount,
      date: new Date(currentDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseFormData(expenseData);
    setCurrentTitle("");
    setCurrentAmount("");
    setCurrentDate("");
  };

  return (
    <form onSubmit={formSubmition}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={currentTitle}
            onChange={titleOnChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={currentAmount}
            onChange={amountOnChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="01-01-2050"
            value={currentDate}
            onChange={dateOnChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
