import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpencse/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e2',
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 4, 15),
  },
  {
    id: 'e3',
    title: "Car Insurence",
    amount: 294.67,
    date: new Date(2024, 4, 20),
  },
  {
    id: 'e4',
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 29),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
