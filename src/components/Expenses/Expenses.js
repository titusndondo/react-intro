import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        expense={expenses[0]}
      />
    </Card>
  );
}

export default Expenses;