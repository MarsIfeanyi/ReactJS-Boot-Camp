/**
 * Hint: By default styles are not scoped.
 *
 * Styled component is a package that helps you build components which have certain styles attached to them where the style really only affect the components to which they were attached and not any othetr components
 *
 * npm install --save styled-components
 */

import styled from "styled-components";
//import './Button.css';

/**
  * Using style component... styled.button`` is a tagged template literal. button is a method on the styled component object. What we passed into the backticks will end up in the button method and the button method will return a new button component.
  * Hint: The styled package has method for all HTML elements
  * For psuedo selectors we use the ampersand symbol 
 
 */

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
