import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
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
export const Preview = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
