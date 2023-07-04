/*import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GlColor = "white";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #2e2e36;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: end;
  width: 70px;
  align-items: center;
`;
export const EShopIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: yellow;
  @media (max-width: 690px) {
    width: 45px;
  }
`;
export const NavLinks = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin: 0 13px;
  .eShop {
    font-size: 26px;
    font-weight: bold;
    color: ${GlColor};
    @media (max-width: 690px) {
      font-size: 16px;
    }
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: ${GlColor};
    span {
      display: block;
      font-size: 9px;
    }
  }
`;
export const SearchFieldForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  input {
    outline: none;
    border: none;
    width: 100%;
    border-radius: 16px;
    padding: 9px;
  }
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-left: -33px;
  color: #2e2e36;
  &:hover {
    cursor: pointer;
  }
`;
export const SignOut = styled.p`
  font-size: 12px !important;
  font-weight: bold;
  color: ${GlColor};
  padding: 10px 20px;

  span {
    display: block;
  }
  .out {
    padding: 2px;
    cursor: pointer;
  }
`;
*/ import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GlColor = "white";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #2e2e36;
  align-items: center;

  @media (max-width: 690px) {
    height: 50px;
    padding: 0 4px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: end;
  width: 70px;
  align-items: center;

  @media (max-width: 690px) {
    width: 50px;
  }
`;

export const EShopIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: yellow;

  @media (max-width: 690px) {
    font-size: 40px;
  }
`;

export const NavLinks = styled.div`
  width: fit-content;
  height: 100%;
  align-items: center;
  display: none;
  justify-content: flex-end;
  @media (min-width: 690px) {
    display: flex;
  }
  @media (max-width: 689px) {
    position: absolute;
    width: 74px;
    z-index: 1;
    display: ${({ clicked }) => (clicked ? "flex" : "none")};
    flex-direction: column;
    background-color: #2e2e36;
    height: fit-content;
    top: 57px;
    right: 7px;
    padding-bottom: 8px;
    &::before {
      content: "";
      position: absolute;
      top: -31px;
      left: 34px;
      z-index: 3;
      border-color: transparent transparent #2e2e36;
      border-style: solid;
      border-width: 20px;
    }
  }
`;

export const NavLink = styled(Link)`
  margin: 0 13px;
  .eShop {
    font-size: 26px;
    font-weight: bold;
    color: ${GlColor};

    @media (max-width: 690px) {
      font-size: 16px;
      margin: 0 6px;
    }
  }
  p {
    font-size: 16px;
    font-weight: bold;
    color: ${GlColor};
    width: max-content;

    span {
      display: block;
      font-size: 9px;
    }
  }

  @media (max-width: 690px) {
    margin: 0 5px;
    .add {
      color: white;
      font-size: 31px;
    }
  }
  .add {
    color: white;
    font-size: 36px;
  }
`;

export const SearchFieldForm = styled.form`
  display: flex;
  align-items: center;
  flex: 1;
  input {
    outline: none;
    border: none;
    width: 100%;
    border-radius: 16px;
    padding: 9px;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-left: -33px;
  color: #2e2e36;
  &:hover {
    cursor: pointer;
  }
`;

export const SignOut = styled.p`
  font-size: 12px !important;
  font-weight: bold;
  color: ${GlColor};
  padding: 10px 20px;
  width: max-content;
  span {
    display: block;
  }
  .out {
    padding: 2px;
    cursor: pointer;
  }
`;
export const Bars = styled(FontAwesomeIcon)`
  display: none;
  @media (max-width: 690px) {
    display: block;
    width: 46px;
    font-size: 36px;
    margin-left: 10px;
    cursor: pointer;
  }
`;