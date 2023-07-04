import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart.selectors";
import { CartShopping, CartContainer, CarTotal } from "./cartIcon.styles";
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <CartContainer>
      <CartShopping icon={faBagShopping} />

      <CarTotal>{cartCount}</CarTotal>
    </CartContainer>
  );
};
export default CartIcon;
