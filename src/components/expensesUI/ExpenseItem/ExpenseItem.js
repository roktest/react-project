import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../generalUI/Card/Card";


const ExpenseItem = (expenseItemProps) => {

  //array distructuring
  //the first element is the pointer to the variable and the second is a function
  //useState returns an array of two elements
  //the first is the current state value
  //the second one is a function for updating that
  const [title, setTitle] = useState(expenseItemProps.title);

  const clickHandler = () => {
    setTitle('Updated');
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
