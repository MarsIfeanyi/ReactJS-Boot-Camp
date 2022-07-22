/**
 * Child To Parent component communication
 *
 * Hint: We move data from child to parent component by utilizing props to receive a function from the parent component which we call in the child component, and then pass an argument to the function Eg. props.onSaveExpenseData(expenseData);
 *
 * Hint: Here in 'ExpenseForm.js'we have been able to gather our user input and combine it into the 'expenseData' object and clear the user input, However we don't need the data here in the ExpenseForm Component, instead we need it in the 'NewExpense' and 'App.js', because we already have our expense array in the 'App.js'. Thus our goal is to add to new expense which the user entered to the list of existing expenses.
 * Thus we need to pass the data which we are collecting and generating in the ExpenseForm to the App.js component. Thus if we want to reach the App.js component we have to first of all reach the NewExpense component because its the NewExpense component that uses the ExpenseForm and then it is the App.js component that uses the NewExpense component.
 *
 * Hint: Props can only be passed from parent to child, we can not skip intermediate components
 *
 * Hint: we can create our own event props and expect functions as values and that would allow us to pass a function (ie the 'key')from a parent component to a child component and then call that function inside of the child component. And when we then call a function we can pass data to that function as a parameter and that is how we can communicate up from child to parent
 *
 * STEPS
 *
 * Step1:
 * Lets add a new prop (attribute) to the NewExpense component (name it whatever you want). here it is 'onSaveExpenseData'
 * Step2: Use the function ie call the 'onSaveExpenseData' in the ExpenseForm Component, ie props.onSaveExpenseData(expenseData).
 * 
 * The value we will get when we call 'onSaveExpenseData' will be a function because we passed the 'saveExpenseDataHandler' in the NewExpense to it
 * Hint: This is (step1 and 2) a very important pattern in React.This is how you can communicate between components and how you can communicate up, how you make sure that the child component can communicate upto the parent component.
 *
 * In Summary: You can accept a function via props and call it from inside the lower-level(child) component to then trigger some action in the parent component (which passed the function)
 *
 */

/**
 * To pass data from child to parent component in React:

Pass a function as a prop to the Child component.
Call the function in the Child component and pass the data as arguments.
Access the data in the function in the Parent.
 */

import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault(); //Prevents the submission of form on page reload.This is default behavior of JS

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }; //Make sure that the property names exist and hold the correct value
    // console.log(expenseData);

    //Child to Parent communication
    props.onSaveExpenseData(expenseData); // onSaveExpenseData is an attribute in the NewExpense component... The data we passed in here (expenseData) is available in the 'enteredExpenseData' parameter of the 'saveExpenseDataHandler' function in NewEXpense.js

    //clearing the input field...Two way Binding
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;







import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
