/**
 * We can make our code reusable by using parameters and a concept called props in React
 *
 * We can pass data to custom components by adding an attribute and inside of that component we can then get access to all the attributes, which might have been set on our custom component.
 *
 * Hint: We are just building our own custom HTML and again just as HTML has attributes, it turns out that with React, our own custom components can also have attributes, called props.
 *
 * Props = Properties...we can set properties of our own custom components
 *
 * Hint: We add the attributes to the custom HTML we created in App.js ie attributes(props) are added to the Components and then with 'props' and dot notation we can call and use it in another component.
 *
 * Hint: React will ensure that we get one parameter in every component which we use as a component and that one parameter will be an object which holds all the received attributes as properties, hence the name 'Props'.
 * The props will get access to all the attributes we defined in our custom element (ie the JSX code in the App.js).
 *
 * The props have key-value pairs as well. The keys are the attributes 'name' defined in the custom HTML (JSX Code) inside the App.js file, and the values is the 'values' set in the {}
 * 
 * Example: App.js code
 * const App = () => {
  // JSX Code
  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};
 Here the key = items and the value = expenses

 *
 * Hint: The key which you access from your props object has to be the same as the name you used/chosed for the attribute.
 *
 * Hint:Choose/use attribute names which are self explanatory and makes sense in the context of what you are working on.
 *
 * Hint: You can make your components truly reusable and configurable by using the props concept. Props is one of the key concept react has to offer.
 *
 *
 * Hint: You define your attribute in the root component file ie App.js and the use props to call it inside the custom component where you want to use it
 */
