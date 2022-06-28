import ExpenseItem from "./components/ExpenseItem";

function App() {
  //Creating the paragraph element using regular JS

  // const para = document.createElement("p");
  // para.textContent = "Front-End Engineer";
  // document.getElementById("root").append(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* <p>Front-End Engineer</p> */}

      <ExpenseItem></ExpenseItem>
    </div> //Desired target state
  );
  //This is JSX and not pure html...JSX is HTML code inside of JS
}

export default App;
