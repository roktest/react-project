import React from "react";
import './NewExpense.css';
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseFormDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseFormData={saveExpenseFormDataHandler}></ExpenseForm>
        </div>
    )

};

export default NewExpense;