import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  display: flex;
  height: 89vh;
  /* background-color: #6322ba; */
  background-color: #f0f2f5;

  justify-content: center;
  padding: 70px;
  margin-top: -26px;
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: fit-content;
    background-color: #fff;
    padding: 10px;

    h1 {
      text-align: center;
      text-transform: uppercase;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
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
    }
  }
  label {
    margin: 8px 0;
  }
  @media (max-width: 689px) {
    height: 100vh;
    padding: 20px 5px;
    form {
      width: 100%;
    }
  }
`;

export const UserIcon = styled(FontAwesomeIcon)`
  background-color: white;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #dddfe2;
`;

export const LinkS = styled(Link)`
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
  color: #80868b;
  width: fit-content;
`;
