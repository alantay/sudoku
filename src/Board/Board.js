import React, { useState } from "react";
import BoardStyled, { Button } from "./BoardStyled";
import boardGen from "./boardGenerator";
import canInsert,{checkFullBoard} from "./canInsert";
import solve from "./solve";

export default function Board() {
  const [boardState, setBoardState] = useState(boardGen());
  const changeHandler = ({ target }, rowIdx, colIdx) => {
    const { value } = target;
    const input = value.trim().slice(-1).toString();

    const re = /^[1-9\b]+$/;
    if (
      input === "" ||
      (re.test(input) && canInsert(input, rowIdx, colIdx, boardState))
    ) {
      const newBoardState = [...boardState];
      newBoardState[rowIdx][colIdx] = input;
      setBoardState([...newBoardState]);
    }
  };

  const solveHander = () => {
    const solution = solve(boardState);
    if(checkFullBoard(solution)){
      setBoardState(solution);
    }else{
      throw "no solution found"
    }
    
  };

  return (
    <>
      <BoardStyled>
        {boardState.map((currentGrid, rowIdx) => {
          return (
            <div className="grid" key={rowIdx}>
              {currentGrid.map((cell, colIdx) => (
                <input
                  key={colIdx}
                  value={cell}
                  className="cell"
                  onChange={(evt) => changeHandler(evt, rowIdx, colIdx)}
                />
              ))}
            </div>
          );
        })}
      </BoardStyled>
      <Button onClick={solveHander}>Solve</Button>
    </>
  );
}
