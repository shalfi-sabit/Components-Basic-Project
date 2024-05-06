import React from "react";

const Card = (props) => {
  return <li className={props.className}>{props.children}</li>;
};

export default Card;
