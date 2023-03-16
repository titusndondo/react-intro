import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: '1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: '2', title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: '3', title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: '4', title: 'New TV', amount: 294.67, date: new Date(2021, 2, 28) }
  ]

  const addExpenseHandler = (expense) => {
    console.log(expense)
  }

  return (<>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={ expenses }/>
    </>
  );
}

export default App;
