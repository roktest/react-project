import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../generalUI/Card/Card";

const ExpenseItem = (expenseItemProps) => {
  let title = expenseItemProps.title;

  const clickHandler = () => {
    console.log('clicked');
    title = 'Updated';
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItemProps.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{title}</h2>
        <div className="expense-item__price">$ {expenseItemProps.price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
