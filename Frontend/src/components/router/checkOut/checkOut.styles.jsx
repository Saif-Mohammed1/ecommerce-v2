import styled from "styled-components";

export const Table = styled.table`
  width: 80%;
  margin: 90px auto;
  text-align: center;
  position: relative;
  caption-side: top;

  caption {
    margin-bottom: 30px;
    font-weight: 500;
  }
`;
export const Header = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
export const Total = styled.td`
  font-size: 26px;
  text-align: end;
`;
/*export const Total = styled.span`
  position: absolute;
  right: 28px;
  font-size: 25px;
  margin-top: 17px;
`;
export const Total = styled.span`
    text-align: right;
    font-size: 25px;
    margin-top: -6px;
    left: 2px;
    margin-bottom: 26px;
  `;*/
