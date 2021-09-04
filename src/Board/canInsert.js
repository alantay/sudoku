export default function canInsert(input, row, col, boardState) {
  const isInRow = boardState[row].some((v) => v === input);
  const isInCol = boardState.some((grid) => {
    return grid[col] === input;
  });
  const rowId = Math.floor(row / 3);
  const colId = Math.floor(col / 3);
  const isInGrid = boardState
    .filter((grid, rowIdx) => rowId === Math.floor(rowIdx / 3))
    .map((grid) =>
      grid.filter((grid, colIdx) => colId === Math.floor(colIdx / 3))
    )
    .flat()
    .some((v) => v === input);
  return !isInRow && !isInCol && !isInGrid;
}

export const checkFullBoard = (boardState) => {
  return boardState.every((row) => {
    return row.every((cell) => {
      return !!cell.trim()
    });
  });
};
