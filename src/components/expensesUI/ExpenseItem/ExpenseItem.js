import "./ExpenseItem.css";

function ExpenseItem(expenseItemProps) {
  const month = expenseItemProps.date.toLocaleString('en-Us', {month: 'long'});
  const day = expenseItemProps.date.toLocaleString('en-Us', {day: '2-digit'});
  const year = expenseItemProps.date.getFullYear();

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h3 className="expense-item__title">{expenseItemProps.title}</h3>
        <div className="expense-item__price">$ {expenseItemProps.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
