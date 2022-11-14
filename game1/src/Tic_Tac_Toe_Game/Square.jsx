import React from "react";

export default function Square(props) {
  return (
    <div
    onClick={props.onClick}
      style={{ 
      border: "3px solid Green", 
      height: "100px", 
      width: "100%" ,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius:"20px",
      backgroundColor: "black"
      }}
      className="square"
    >
      <h2>{props.value}</h2>
    </div>
  );
}
