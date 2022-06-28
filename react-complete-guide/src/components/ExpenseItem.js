import "./ExpenseItem.css";

//Creating a component
function ExpenseItem() {
  const expenseDate = new Date(2022, 5, 20);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

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
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
} //Here we return the HTML code, the JSX code which should be brought onto the screen by the component

// To use the component we have to export it
export default ExpenseItem;
