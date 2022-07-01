import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

//Creating a component, using arrow function
const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!!!");
  //   console.log(title);
  // };
  //Dynamic Data

  return (
    <div>
      <ExpensesFilter></ExpensesFilter>

      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>

        {/* Here we just point at the function and not call the function */}
        {/* <button onClick={clickHandler}>Change Title </button> */}
      </Card>
    </div>
  );
}; //Here we return the HTML code, the JSX code which should be brought onto the screen by the component

// To use the component we have to export it
export default ExpenseItem;
