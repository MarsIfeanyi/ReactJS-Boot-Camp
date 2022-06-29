import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

//Creating a component
const ExpenseItem = (props) => {
  //   return (

  // Hardcoded Data

  //     <div className="expense-item">
  //       <div>June 20th 2022</div>
  //       <div className="expense-item__description">
  //         <h2>Car Insurance</h2>
  //         <div className="expense-item__price">$294.67</div>
  //       </div>
  //     </div>
  //   );

  //Dynamic Data

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card> //Using Card components as a wrapper
  );
}; //Here we return the HTML code, the JSX code which should be brought onto the screen by the component

// To use the component we have to export it
export default ExpenseItem;
