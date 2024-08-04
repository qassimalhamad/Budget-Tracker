import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const expenses = [
    { name: 'Food', overBudget: true },
    { name: 'Laundry', overBudget: true },
    { name: 'Rental', overBudget: false },
  ];
  const expensesList = expenses.map((expense, index) => (
    <li key={index} className={expense.overBudget ? 'overBudget' : 'not-overBudget'}>
      {expense.name}
    </li>
  ))
  return (
    <>
      <h1> expense List</h1>

        {expensesList}
    </>
  )
}

export default App