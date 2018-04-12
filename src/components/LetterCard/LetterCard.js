import React from "react";
import "./LetterCard.css";

const LetterCard = props => (
  <div className="card">
    <div className="img-container"  onClick={props.somefunction}>
      <img alt={props.name} src={props.image} />
    </div>


  </div>
);

export default LetterCard;