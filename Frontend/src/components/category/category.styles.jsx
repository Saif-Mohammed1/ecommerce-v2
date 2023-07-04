import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 10px;
  h2 {
    text-align: center;
  }
`;
export const Title = styled(Link)`
  color: #000;
  &:hover {
    color: #0b5bed;
  }
`;
