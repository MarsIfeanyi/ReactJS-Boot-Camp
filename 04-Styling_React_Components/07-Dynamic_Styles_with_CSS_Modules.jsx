import React, { useState } from "react";

//import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}> */}
      {/* Apply form-control style and then check if isValid is false, if it is false then apply the invalid styles */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

/**
 * THE CSS STYLE
 * 
 * .form-control {
  margin: 0.5rem 0;
}

.form-control label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

.form-control input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

.form-control input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

 We are going to add the invalid class dynamically 

.form-control.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
  
  .form-control.form-control.invalid label {
    color: red;
  }
  
 * 
 */