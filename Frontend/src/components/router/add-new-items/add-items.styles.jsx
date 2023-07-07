import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  select {
    margin: 0 5px 5px;
    padding: 10px;
    cursor: pointer;
    option {
      cursor: pointer;
    }
  }
`;

export const AddItemsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 11px;
  /* outline: none; */
  /* border: none; */
  button {
    padding: 10px;
    width: fit-content;
    cursor: pointer;
    align-self: center;
    font-size: 16px;
  }
`;
export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  outline: none;
  border: none;
  background-color: #eee;
  border-radius: 25px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${Input} {
    flex: 1;
  }
`;

export const FontAwesomeIcons = styled(FontAwesomeIcon)`
  padding: 10px;
  padding: 14px;
  position: absolute;
  right: 12px;
  cursor: pointer;
`;
export const ErrorStyle = styled.span`
  text-align: center;
  color: red;
  margin-top: 5px;
`;
