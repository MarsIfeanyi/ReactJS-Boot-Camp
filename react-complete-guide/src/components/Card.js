import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //Hint: There is white space after card before the closing quote. Here anything that is received as className from outside is added here. card is a class defined in the Card.css

  return <div className={classes}>{props.children}</div>;
}

export default Card;
