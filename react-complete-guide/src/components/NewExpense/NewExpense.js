import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }; // ...enteredExpenseData,Is the object generated in the submit Handler in the 'ExpenseForm'. we use the spread operator to pull out all the key values pairs and add it into this new object (expenseData)

    // console.log(expenseData);
    props.onAddExpense(expenseData); //Child to parent communication
    setIsEditing(false); //Closes the form after submission
  };

  return (
    <div className="new-expense">
      {/* We want to show the 'Add New Expense' Button if we are not editing ie if isEditing is false*/}
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {/* Here we want to show the form if isEditing is true */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
