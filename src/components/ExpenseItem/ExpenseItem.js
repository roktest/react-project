import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(expenseItemProps) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseItemProps.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2 className="expense-item__title">{expenseItemProps.title}</h2>
        <div className="expense-item__price">$ {expenseItemProps.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
