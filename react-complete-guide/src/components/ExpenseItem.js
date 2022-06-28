import "./ExpenseItem.css";

//Creating a component
function ExpenseItem(props) {
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

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
} //Here we return the HTML code, the JSX code which should be brought onto the screen by the component

// To use the component we have to export it
export default ExpenseItem;
