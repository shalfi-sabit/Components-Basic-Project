import React from "react";

const Concept = ({ img, title, description }) => {
  return (
    <>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Concept;
