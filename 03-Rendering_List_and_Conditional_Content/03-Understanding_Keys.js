/**
 * React has a special concept when it comes to rendering list of data. To update and render the list efficiently without performance losses, or bugs which may occur, which add the 'Key' prop and use it to point to the unique 'id'
 *
 * Hint: You should always add 'key' when mapping out list of items.
 */

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //selected={filterYear} is for Two way Binding

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>

        {/* Rendering List of Data using Map...Dynamic Rendering */}

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
