/**
 * Conditional content is about rendering different outputs under different conditions
 */

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020"); //Here 2020 is set as the initial state value

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Filtering the expense
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); //The filter method returns a brand new array, but the original array is not touched or transformed. you pass a function to it, and if 'true' a certain item is kept, else it is not kept

  //selected={filterYear} is for Two way Binding

  //3rd Approach of rendering Conditional Content... This is more cleaner

  let expensesContent = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>

        {/* 1st Approach...Using Ternary Operator for Rendering/Outputting conditional content */}

        {/* {filteredExpenses.length === 0 ? (
           <p>No expense found.</p>
         ) : (
           filteredExpenses.map((expense) => (
             <ExpenseItem
               key={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
             ></ExpenseItem>
           ))
         )} */}

        {/* 2nd Approach...
         The part after && is rendered if the part before && returns true */}
        {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
         {filteredExpenses.length > 0 &&
           filteredExpenses.map((expense) => (
             <ExpenseItem
               key={expense.id}
               title={expense.title}
               amount={expense.amount}
               date={expense.date}
             ></ExpenseItem>
           ))} */}

        {/* Rendering List of Data using Map...Dynamic Rendering and Adding the key prop */}

        {/* {filteredExpenses.map((expense) => (
           <ExpenseItem
             key={expense.id}
             title={expense.title}
             amount={expense.amount}
             date={expense.date}
           ></ExpenseItem>
         ))} */}
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
