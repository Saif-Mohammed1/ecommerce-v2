import styled from "styled-components";

export const TableContainer = styled.div`
  grid-area: content;
  /* overflow: auto; */
  @media screen and (max-width: 690px) {
    margin: 0 5px;
  }
`;

export const Table = styled.table`
  table-layout: fixed;
  /*width: calc(100% - 175px);
  margin-left: 170px; */
  background-color: #eee;
  text-align: center;
  caption-side: top;
  width: 100%;
  caption {
    padding: 6px;
    div {
      display: flex;
      justify-content: space-between;
      span {
        color: red;
      }
    }
  }
  td {
    border: 2px solid white;
    padding: 4px;
    overflow: auto;
    white-space: nowrap;
    span {
      cursor: pointer;
      margin: 0 7px;

      &:hover {
        font-weight: 700;
        color: red;
      }
    }
    img {
      /* width: 100%;
       */
      min-width: 60px;
      max-width: 120px;
    }
  }
  .active {
    color: #2196f3;
    font-weight: bold;
  }
  .addItem {
    cursor: pointer;
    background-color: #eee;
    padding: 4px;
    transition: background-color 0.5s linear;
    -webkit-transition: background-color 0.5s linear;
    -moz-transition: background-color 0.5s linear;
    -ms-transition: background-color 0.5s linear;
    -o-transition: background-color 0.5s linear;

    &:hover {
      background-color: #ccc;
    }
  }
`;
