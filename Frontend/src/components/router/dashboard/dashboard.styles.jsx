import styled from "styled-components";
const main_width = "168px";
export const DivContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas: "dashboard content content content content ";
  gap: 6px;
  @media screen and (max-width: 690px) {
    grid-template-areas:
      "dashboard dashboard dashboard dashboard dashboard "
      "content  content content content content";
  }
  p {
    border: 1px solid;
    padding: 5px;
    background: #eee;
    text-align: center;
    box-shadow: 0px 1px 1px 1px;
  }
`;
export const DashboardContainer = styled.div`
  /* margin-top: 2px;
  position: fixed;
  top: 11vh;
  height: 100vh;
  width: ${main_width}; */

  padding: 7px 12px;
  background-color: #eee;
  /* text-align: center; */
  grid-area: dashboard;
  margin-top: -25px;
  box-shadow: inset 1px 1px 4px 7px #fff, inset -1px -1px 1px 7px black,
    inset -2px -2px 4px 7px #eaeaea;
  ul {
    list-style: none;
    padding: 0;
    li {
      /* padding: 10px 0; */
      margin: 10px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      a {
        display: block;
        width: 100%;
        padding: 4px;
      }
    }
    .active {
      color: #efe7e7;
      background-color: #81c784;
      font-weight: bold;
    }
  }
`;
