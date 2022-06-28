/**
 * Create a new component that is responsible for displaying expenses

Add multiple ExpenseItem components in that component

Keep the expenses data in the App component and pass that data into the newly created component
 */

import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemData.css";

function ExpenseItemData(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.item[0].title}
        date={props.item[0].date}
        amount={props.item[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.item[1].title}
        date={props.item[1].date}
        amount={props.item[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.item[2].title}
        date={props.item[2].date}
        amount={props.item[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        title={props.item[3].title}
        date={props.item[3].date}
        amount={props.item[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default ExpenseItemData;
