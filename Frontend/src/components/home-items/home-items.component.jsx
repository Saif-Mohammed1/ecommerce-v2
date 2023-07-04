import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { homeItemsStart } from "../../store/home/home.action";

import {
  BackgroundImage,
  Body,
  Button,
  HomeItemContainer,
} from "./home-items.styles";
import api from "../../utils/axios/axios";

const HomeItems = ({ items }) => {
  const { imageFile, imageUrl, title, route, id } = items;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onNavigateHandler = () => navigate(route.toLowerCase());

  // mySqal
  const deleteItemHandler = async () => {
    try {
      await api.delete(`/home/${id}`);
      dispatch(homeItemsStart());
    } catch (error) {
      alert("Error deleting item!");
    }
  };
  return (
    <HomeItemContainer>
      {imageFile && imageFile !== "" ? (
        <BackgroundImage imageUrl={imageFile} />
      ) : (
        <BackgroundImage imageUrl={imageUrl} />
      )}
      <Body onClick={onNavigateHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
      <Button onClick={deleteItemHandler}>X</Button>
    </HomeItemContainer>
  );
};

export default HomeItems;
