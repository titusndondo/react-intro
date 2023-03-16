import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 2, 28) }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </div>
  );
}

export default App;
