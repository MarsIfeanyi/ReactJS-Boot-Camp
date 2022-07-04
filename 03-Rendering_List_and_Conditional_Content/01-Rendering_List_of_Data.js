/**
 * The map method creates a new array based on another array and it transforms every element in the original array.
 * The map method takes a function which pass as an argument and then every item in the array which we are calling map.
 * Map takes a function as an argument and that function executes for every element in the array and it gets that element for which it is currently executing as a parameter.
 */

{
  props.item.map((expense) => <ExpenseItem></ExpenseItem>);
} //Here we are mapping expense to ExpenseItem (ie we return the JSX element into which we want to map the expense)...Thus we are mapping every element in the expense array into ExpenseItem JSX element ie we are transforming the expense object to JSX element (special kind of object)

//The array is now dynamic and thus any changes will be reflected in the list as well

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  //selected={filterYear} is for Two way Binding

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      {/* Rendering List of Data using Map...Dynamic Rendering */}

      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}

      {/* Manual or Hardcoded Rendering */}

      {/* <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
