/**
 * Extracted from App.js
 * const App=()=>{
 * return (
    <div>
      <h2>Let's get started!</h2>

      <Expenses item={expenses}></Expenses>
    </div>)
 * }

 */

//How React works with the above JSX code under the hood

return React.createElement(
  "div",
  {},
  React.createElement("h2", {}, "Let's get started!"),
  React.createElement(Expenses, { items: expenses })
);
