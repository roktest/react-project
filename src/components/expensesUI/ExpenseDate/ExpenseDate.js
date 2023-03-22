import './ExpenseDate.css';

const ExpenseDate = (expenseDateProps) => {
    const month = expenseDateProps.date.toLocaleString('en-Us', {month: 'long'});
    const day = expenseDateProps.date.toLocaleString('en-Us', {day: '2-digit'});
    const year = expenseDateProps.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;