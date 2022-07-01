import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }; // ...enteredExpenseData,Is the object generated in the submit Handler in the 'ExpenseForm'. we use the spread operator to pull out all the key values pairs and add it into this new object (expenseData)

    // console.log(expenseData);
    props.onAddExpense(expenseData); //Child to parent communication
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
