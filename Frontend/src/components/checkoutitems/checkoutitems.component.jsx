import { Arrow, Image, Remove } from "./checkoutiems.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartItems,
  addItemToCart,
  removeItems,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { selectCurrentUser } from "../../store/user/user.selectors";
const CheckOutItems = ({ cartItem }) => {
  const { imageUrl, imageFile, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const clearCartItem = () =>
    dispatch(clearCartItems(cartItem, currentUser.id));
  const removeItemsHandler = () =>
    dispatch(removeItems(cartItems, cartItem, currentUser.id));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem, currentUser.id));
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
