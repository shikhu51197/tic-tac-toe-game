import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
        //rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //colomns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    
    <div style={{color:"red" , fontSize:"40px" }} className="board-container">
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button style={{backgroundColor:"black" , color:"white" ,borderRadius:"10px" , padding:"20px" , fontSize:"20px" , marginTop:"100px"}} onClick={handleReset}>Let's Play Again</button>
        </>
      ) : (
        <>
          <h1>TIC TAC TOE GAME</h1>
          <h2 style={{color:"blue"}}>Player {isXTurn ? "X" : "0"} please move</h2>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;