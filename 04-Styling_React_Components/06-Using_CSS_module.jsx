import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
//Hint: Under the Hood, the CSS module changes the CSS files you are importing to be unique. it creates uniques styles and classes for the components... The CSS module ensures that the CSS Styles we set up in a CSS file are scoped to the component we import the file into
