import { Arrow, Image, Remove } from "./checkoutiems.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartItems,
  addItemToCart,
  removeItems,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { useEffect, useState } from "react";
const CheckOutItems = ({ cartItem }) => {
  const { imageUrl, imageFile, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const [totalClick, setTotalClick] = useState(1);

  useEffect(() => {
    setTotalClick(1);
  }, [cartItems]);

  const clearCartItem = () =>
    dispatch(clearCartItems(cartItem, currentUser.id));
  const removeItemsHandler = () => {
    setTotalClick(totalClick + 1);

    dispatch(removeItems(cartItems, cartItem, currentUser.id, totalClick));
  };

  const addItemToCartHandler = () => {
    setTotalClick(totalClick + 1);

    dispatch(addItemToCart(cartItems, cartItem, currentUser.id, totalClick));
  };
  return (
    <tbody>
      <tr>
        <td>
          {imageUrl && imageUrl !== "" ? (
            <Image src={imageUrl} alt={name} />
          ) : (
            <Image src={imageFile} alt={name} />
          )}
        </td>
        <td>{name}</td>
        <td>
          <Arrow onClick={removeItemsHandler}> &lt; </Arrow>

          <span>{quantity}</span>
          <Arrow onClick={addItemToCartHandler}> &gt; </Arrow>
        </td>
        <td>{price}$</td>
        <Remove onClick={clearCartItem}>X</Remove>
      </tr>
    </tbody>
  );
};
export default CheckOutItems;
