/**
 * Child To Parent component communication
 *
 * Hint: Here we have been able to gather our user input and combine it into the 'expenseData' object and clear the user input, However we don't need the data here in the ExpenseForm Component, instead we need it in the 'NewExpense' and 'App.js', because we already have our expense array in the 'App.js'. Thus our goal is to add to new expense which the user entered to the list of existing expenses.
 * Thus we need to pass the data which we are collecting and generating in the expense form to the app component. Thus if we want to reach the app component we have to first of all reach the NewExpense component because its the NewExpense component that uses the ExpenseForm and then it is the app component that uses the NewExpense component.
 *
 * Hint: Props can only be passed from parent to child, we can not skip intermediate components
 *
 *
 * Hint: we can create our own event props and expect functions as values and that would allow us to pass a function from a parent component to a child component and then call that function inside of the child component. And when we then call a function we can pass data to that function as a parameter and that how we can communicate up from child to parent
 *
 * STEPS
 *
 * Step1:
 * Lets add a new prop (attribute) to the NewExpense component (name it whatever you want). here it is 'onSaveExpenseData'
 * Step2: Use the function ie called the 'onSaveExpenseData' in the ExpenseForm Component. The value will get when we call 'onSaveExpenseData' will be a function because we passed the 'saveExpenseDataHandler' in the NewExpense to it
 * Hint: This is (step1 and 2)a very important pattern in React.This is how you can communicate between components and how you can communicate up, how you make sure that the child component can communicate upto the parent component
 */
