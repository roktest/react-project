import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../generalUI/Card/Card';
import './Expenses.css';

const Expenses = (appProps) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={appProps.items[0].title}
                price={appProps.items[0].amount}
                date={appProps.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={appProps.items[1].title}
                price={appProps.items[1].amount}
                date={appProps.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={appProps.items[2].title}
                price={appProps.items[2].amount}
                date={appProps.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={appProps.items[3].title}
                price={appProps.items[3].amount}
                date={appProps.items[3].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;