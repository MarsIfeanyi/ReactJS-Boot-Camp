/**
 * How is a component written in React?
 * Hint: Component is written just a as function.
 * A component in React is just a JS function, that returns a single div element.
 *
 * Hint: In naming your component the convention is to repeat the same file name without the extension ie the function component name should be the same as the file name, eg CharBar.js (filename) = CharBar (function component name)
 *
 * Hint: The key difference between the custom HTML (Component) to the built-in HTML elements is that is not starting with a lowercase character, but with an uppercase character ie The name for Custom HTML starts with Capital Letter...Your custom HTML must start with an uppercase, so that React is able to detect that it is a custom component
 *
 * Hint: The simple rule that react applies is that: Lowercase elements are built-in HTML elements while uppercase elements are elements defined by the developer of the app.
 *
 * Hint: In Summary the steps to take when you are building components are:
 * 1. Create the component using JS function, returning some HTML codes (it must return a single div ie You MUST have only one root element per return statement or per JSX code snippet)
 * 2. Export the created component
 * 3. IMport the component in the file where you want to use it so that they are in the JSX code, and you can use it like an HTML element,starting with an uppercase character
 *
 * Hint: App.js is the root components ie its the main component being rendered in the starting file (index.js), thus you don't add it into the components folder
 */
