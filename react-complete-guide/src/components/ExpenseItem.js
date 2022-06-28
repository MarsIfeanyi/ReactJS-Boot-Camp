// This hold the expense item components

//Creating a component
function ExpenseItem() {
  return (
    <div>
      <div>June 20th 2022</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
} //Here we return the HTML code, the JSX code which should be brought onto the screen by the component

// To use the component we have to export it
export default ExpenseItem;
