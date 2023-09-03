import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const sectionPadding = "50px";
const base = styled(FontAwesomeIcon)`
  padding: 10px;
  width: 15px;
  border-radius: 50%;
  margin-bottom: 6px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    margin-top: -5px;

    animation-play-state: paused;
  }
`;
const Rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  
`;
export const AboutContainer = styled.div`
  margin-top: -24px;
  ul {
    list-style: decimal;
  }
`;
export const Info = styled.div`
  padding: ${sectionPadding};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  & p {
    margin: 10px 0;
    font-size: 20px;
    width: 410px;
    text-align: center;

    & span {
      font-weight: bold;
    }
  }
`;
export const Image = styled.img`
  width: 200px;
  border-radius: 50%;
`;
export const Social = styled.ul`
  display: flex;
  list-style: none !important;
  margin-top: 30px;
  padding: 0;
  li {
    padding: 0 4px;
  }
`;

export const GitHub = styled(base)`
  background-color: #333;
  animation: ${Rotate} 4s linear 2s infinite;
`;
export const Facebook = styled(base)`
  background-color: #1877f2;
  animation: ${Rotate} 4s linear 2s infinite;
`;
export const LinkedIn = styled(base)`
  background-color: #0077b5;
  animation: ${Rotate} 4s linear 2s infinite;
`;
export const Telegram = styled(base)`
  background-color: #0088cc;
  animation: ${Rotate} 4s linear 2s infinite;
`;
export const WhatsApp = styled(base)`
  background-color: #25d366;
  animation: ${Rotate} 4s linear 2s infinite;
`;
export const Li = styled.li`
  padding: 6px;
`;
export const Description = styled.div`
  padding: ${sectionPadding};
  color: #777;
  background-color: #f6f6f6;
  h1 {
    text-align: center;
    font-size: 45px;
    color: cadetblue;
  }
  p {
    line-height: 1.6;
  }
`;
export const Skill = styled.div`
  padding: ${sectionPadding};
  h1 {
    color: #777;
    text-align: center;
  }
`;
export const PreviousProject = styled.div`
  padding: ${sectionPadding};
  background-color: #f6f6f6;
  h1 {
    color: #777;
    text-align: center;
    color: cadetblue;
  }
`;
