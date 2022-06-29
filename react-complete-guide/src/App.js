// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  //Creating the paragraph element using regular JS

  // const para = document.createElement("p");
  // para.textContent = "Front-End Engineer";
  // document.getElementById("root").append(para);

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <p>Front-End Engineer</p> */}

      <Expenses item={expenses}></Expenses>
    </div> //Desired target state
  );
  //This is JSX and not pure html...JSX is HTML code inside of JS
}

export default App;
