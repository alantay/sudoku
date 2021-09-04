import styled from "styled-components";

export default styled.div`
  padding: 16px;
  width: calc(100vw - 128px);
  height: calc(100vw - 128px);
  @media (orientation: landscape) {
    width: calc(100vh - 128px);
    height: calc(100vh - 128px);
  }
  display: grid;
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 11.1111111% 11.1111111% 11.1111111% 11.1111111% 11.1111111% 11.1111111% 11.1111111% 11.1111111% 11.1111111%;
    min-width: 0;
    &:nth-child(3n + 3) {
      &:not(:last-child) {
        border-bottom: 2px solid black;
      }
    }
  }
  .cell {
    text-align: center;
    font-size: 2rem;
    border: 1px solid #ccc;
    &:nth-child(3n + 3) {
      &:not(:last-child) {
        border-right: 2px solid black;
      }
    }
  }
`;
export const Button = styled.button`
  margin-left: 16px;
`;
