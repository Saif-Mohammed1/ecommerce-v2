import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../store/cart/cart.selectors";
import CheckOutItems from "../../checkoutitems/checkoutitems.component";
import { Table, Total } from "./checkOut.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const CartTotal = useSelector(selectCartTotal);
  return (
    <div>
      <Table>
        <caption>CheckOut Page</caption>
        <thead>
          <tr>
            <td>Product</td>
            <td>Discretion</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Remove</td>
          </tr>
        </thead>
        {cartItems.map((cartItem) => (
          <CheckOutItems key={cartItem.id} cartItem={cartItem} />
        ))}
        <tbody>
          <tr>
            <Total colSpan={5}>Total : {CartTotal}$</Total>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default CheckOut;
