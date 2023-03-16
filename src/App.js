import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'Toilet Paper', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New Desk (Wooden)', amount: 294.67, date: new Date(2021, 2, 28) },
    { title: 'New TV', amount: 294.67, date: new Date(2021, 2, 28) }
  ]

  return (
      <Expenses expenses={ expenses }/>
  );
}

export default App;
