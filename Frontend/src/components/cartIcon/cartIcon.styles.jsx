import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { GlColor } from "../router/navigation/navigation.styles";

export const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CartShopping = styled(FontAwesomeIcon)`
  font-size: 32px;
  color: ${GlColor};
`;
export const CarTotal = styled.span`
  position: absolute;
  bottom: 0;
`;

/*


    color: black;
    position: absolute;
    /* left: 50%; */
/* top: 50%; */
/* transform: translate(-189%, 50%); 
    bottom: -2px;
    left: 34%;
*/
