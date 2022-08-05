import React, { useState } from "react"
import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <>
      <div>
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpenseList filteredExpenses={filteredExpenses} />
        </Card>
      </div>
    </>
  )
}

export default Expenses
