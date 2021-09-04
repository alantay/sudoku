import canInsert, { checkFullBoard } from "./canInsert";

export default function solve(boardState) {
  if(checkFullBoard(boardState)) {
    console.log("got it solution", boardState)
    return boardState;
  }
  const workingBoardState = JSON.parse(JSON.stringify(boardState));
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const cell = workingBoardState[rowIdx][colIdx];
      // if cell is empty
      if (cell.trim() === "") {
        // loop thru numbers 1 to 9
        for (let input = 1; input <= 9; input++) {
          // check if can insert
          if (canInsert(input.toString(), rowIdx, colIdx, workingBoardState)) {
            // check insert number
            workingBoardState[rowIdx][colIdx] = input.toString();
            // solve with new inserted number
            const solution = solve(workingBoardState);
            // check if board is filled with new solution
            if (checkFullBoard(solution)) {
              return solution;
            }
          }
        }// end: loop thru numbers 1 to 9
        // reaching here means no number can be inserted or number inserted did not give final solution
        return workingBoardState;
      }// end: if cell is empty
    }
  }
}
