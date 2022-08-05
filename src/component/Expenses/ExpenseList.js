import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./ExpenseList.css"

const expenseList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expense-list__fallback">Found no expense.</h2>
  }
  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expenses) => {
        return (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        )
      })}
    </ul>
  )
}

export default expenseList
