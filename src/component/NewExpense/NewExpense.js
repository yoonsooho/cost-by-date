import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = ({ onAddExpense }) => {
  const [isEditting, setIsEditting] = useState(false)

  const saveExpenseDataHandledr = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddExpense(expenseData)
    setIsEditting(false)
  }

  const startEditingHandler = () => {
    setIsEditting(true)
  }
  const stopEditingHandler = () => {
    setIsEditting(false)
  }

  return (
    <div className="new-expense">
      {!isEditting && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditting && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandledr} onCancel={stopEditingHandler} />
      )}
    </div>
  )
}

export default NewExpense
