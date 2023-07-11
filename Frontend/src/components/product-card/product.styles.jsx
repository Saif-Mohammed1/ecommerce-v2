import styled from "styled-components";
export const BeforeProductCard = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  margin-bottom: 96px;
  position: relative;

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin-bottom: 7px;
  }
  p {
    margin: 0;
  }

  &:hover {
    button {
      opacity: 0.85;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
    img {
      opacity: 0.7;
    }
  }
`;

// export const Details = styled.div`
//   display: flex;
//   justify-content: space-between;
//   span {
//     font-family: Open Sans Condensed, sans-serif;
//     margin: 0;
//     margin-bottom: 11px;
//   }
// `;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;

  div {
    display: flex;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    /* border: none; */
    outline: none;
    margin: 2px;
  }
  input[type="submit"] {
    padding: 3px;
    width: fit-content;
    cursor: pointer;
    margin-left: 8px;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
export const FomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const AddItem = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  width: 60%;
`;
export const UpdateItem = styled(AddItem)`
  top: 65%;
`;

export const RemoveItem = styled.button`
  display: none;
  position: absolute;
  top: 0;
  width: 27px;
  color: red;
  right: 0;
  text-align: center;
  font-size: 18px;
  padding: 0px 7px;
`;
