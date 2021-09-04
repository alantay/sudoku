import canInsert, { checkFullBoard } from "./canInsert";

export default function solve(boardState) {
  if(checkFullBoard(boardState)) {
    console.log("got it solution", boardState)
    return boardState;
  }
  const tempState = JSON.parse(JSON.stringify(boardState));
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const cell = tempState[rowIdx][colIdx];
      if (cell.trim() === "") {
        for (let input = 1; input <= 9; input++) {
          if (canInsert(input.toString(), rowIdx, colIdx, tempState)) {
            tempState[rowIdx][colIdx] = input.toString();
            const solution = solve(tempState);
            if (checkFullBoard(solution)) {
              return solution;
            }
          }
        }
        return tempState;
      }
    }
  }
}
