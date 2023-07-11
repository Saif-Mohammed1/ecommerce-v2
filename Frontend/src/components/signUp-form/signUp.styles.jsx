import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  /* height: 89vh; */
  /* background-color: #6322ba; */
  background-color: #f0f2f5;
  justify-content: center;
  padding: 70px;
  margin-top: -26px;
  form {
    display: flex;
    flex-direction: column;
    /* width: 300px; */
    width: 80%;
    height: fit-content;
    background-color: #fff;
    padding: 10px;
    h1 {
      text-transform: uppercase;
      text-align: center;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: fit-content;
        padding: 7px;
        align-self: center;
        margin: 10px 0;
        cursor: pointer;
        background-color: #4285f4;
        outline: none;
        border: none;
        border-radius: 12px;
        color: white;
        font-weight: bold;
        &:hover {
          background-color: #1b222e;
        }
      }
      a {
        font-weight: bold;
        -webkit-text-decoration: underline;
        text-decoration: underline;
        text-transform: uppercase;
        color: #80868b;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        &:hover {
          color: #4285f4;
        }
      }
    }
  }

  label {
    margin: 8px 0;
  }
  button {
    width: fit-content;
    padding: 5px;
    align-self: center;
    margin: 10px 0;
    cursor: pointer;
    text-transform: uppercase;
  }
  @media (max-width: 689px) {
    height: 100vh;
    padding: 20px 5px;
    form {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #dddfe2;
`;
