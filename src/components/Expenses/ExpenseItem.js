import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
    console.log('EXPENSES', expense);

    const [title, setTitle] = useState(expense.title);

    const clickHandler = () => {
        console.log('Clicked!!!')
        setTitle('updated');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expense.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expense.amount}</div>
            </div>
            <button onClick={ clickHandler } >Change title</button>
        </Card>
    );
}
    
export default ExpenseItem;