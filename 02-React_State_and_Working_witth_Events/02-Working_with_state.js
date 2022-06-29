import React, { useState } from "react"; // {useState} allows us to define values as state where changes to these values should reflect in the component function being called

/**
 * {useState}  is React Hook.
 * We call the useState() inside the component function
 *
 * Hint:All hooks are recognized with the 'use' that starts their name.
 *
 * Hint: All hooks must be called inside a react component function, they can not be called outside the component function.
 * Also they should not be called in nested functions. They should be called directly in the component function and then you will assign initial value to it.
 *
 * Hint: useState returns an array where the first value is the variable itself, and the second element is the updating function, thus we can use array destructuring to store both elements in separate variables or constants.
 * Hint: For the array destructuring you can choose any name of your choice, it is the order that matters. The first element is a point at the managed value (ie the value at the initial value,props.title) and the second element is a function which we can later call to set a new title...
 *
 *
 * Hint: Both names are up to you but the convention is to use something which describes the value and then set with the name repeated with capital letter
 *
 * Hint: useState always returns an array wit exactly two elements, the 1st element is the current state value and the 2nd element is a function for updating the current state value
 *
 *
 * Hint: When you call the state updating function (setTitle), it doesn't just assign a new value to some variable, but the component function in which you call the state updating function and in which you initialize your state with useState will be executed again and re-valuated
 *
 *
 * Hint: If you have data which might change and where changes to that data should be reflected on the user interface, then you need state, because regular variables will not do the trick, with state however you csn set and change values and when they change React will re-evaluate the component in which the state was registered.
 *
 * State is a key concept in React
 *
 * Hint: Whenever a state changes, its only the component function and only the specific instance where the component is being used will be re-evaluated by react and the other instances are not affected by the state change.
 *
 * Hint: REact keeps track of when we call useState in a given component instance for the first time. When we call it for the first time, it takes that argument as an initial value. But if a component is then re-executed because of state change, React will not re-initialize the state, instead it will detect that the state had been initialized in the past and it will just grab the latest state and gives us the new state.
 * Thus the initial value is only considered when the component is being executed for the first time, for a given component instance.
 *
 * State adds reactivity to our application.
 */

const [title, setTitle] = useState(props.title);
