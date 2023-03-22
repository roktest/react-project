import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-item__date">March 22nd 2023</div>
      <div className="expense-item__description">
        <h3 className="expense-item__title">Car insurance</h3>
        <div className="expense-item__price">$1234.45</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
