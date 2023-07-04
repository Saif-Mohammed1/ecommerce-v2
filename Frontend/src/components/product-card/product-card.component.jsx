import {
  AddItem,
  Details,
  Form,
  Info,
  ProductCardContainer,
  RemoveItem,
  UpdateItem,
} from "./product.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { addItemToCart, userCartId } from "../../store/cart/cart.action";
import { useEffect, useState } from "react";
import {
  isAdminExist,
  selectCurrentUser,
} from "../../store/user/user.selectors";
import {
  fetchCategoriesStart,
  updateAndAddCategoriesStart,
} from "../../store/categories/categories.action";
import api from "../../utils/axios/axios";
const defaultFiled = { id: null, name: "", price: "", imageUrl: "" };
const ProductCard = ({ item, title, Delete }) => {
  const IsAdmin = useSelector(isAdminExist);
  const cartItem = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  const [cartItems, setCartItems] = useState(cartItem);
  const [change, setChange] = useState(false);
  const [updateItems, setUpdateItems] = useState(defaultFiled);
  const { name, price, imageUrl, rating, imageFile } = item;
  const [isEdit, setEdit] = useState(false);
  const [imgFileUpdate, setImgFileUpdate] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      setCartItems(cartItem);
    }
    // Update cartItems when cartItem changes
  }, [cartItem]);

  const addItemsHandler = (userId) =>
    dispatch(addItemToCart(cartItems, item, userId));

  const handleAddItem = (event) => {
    event.preventDefault();
    // updateItems.id = item.id; id is dynim
    const formData = new FormData();
    if (price === 0 || rating === 0) return;

    //MySQL
    if (imageUrl && imageUrl !== "") {
      if (updateItems.imageUrl && updateItems.imageUrl !== "") {
        formData.append("imageUrl", updateItems.imageUrl);
      }
    } else {
      formData.append("imageFile", imgFileUpdate);
    }
    formData.append("_method", "put"); //without it u will get an error
    formData.append("price", updateItems.price);
    formData.append("name", updateItems.name);
    dispatch(updateAndAddCategoriesStart(formData, item.id));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUpdateItems({ ...updateItems, [name]: value });
  };

  // mysql
  const removeItem = async () => {
    try {
      await api.delete(`products/${item.id}`);
      dispatch(fetchCategoriesStart());
    } catch (error) {
      alert("failed to delete product");
    }
  };

  return (
    <ProductCardContainer>
      <img
        src={imageUrl && imageUrl !== "" ? imageUrl : imageFile}
        alt={name}
      />
      <Details>
        {isEdit ? (
          <Form method="put" onSubmit={handleAddItem}>
            <div>
              <input
                type="text"
                placeholder="Enter New Name"
                name="name"
                value={updateItems.name}
                onChange={handleInputChange}
              />
              <input
                name="price"
                value={updateItems.price}
                type="number"
                placeholder="Enter New Price"
                onChange={handleInputChange}
                min={0}
              />
              {imageUrl && imageUrl !== "" ? (
                <input
                  name="imageUrl"
                  value={updateItems.imageUrl}
                  type="text"
                  placeholder="Enter New imageUrl"
                  onChange={handleInputChange}
                />
              ) : (
                <input
                  name="imageFile"
                  type="file"
                  onChange={(e) => setImgFileUpdate(e.target.files[0])}
                  placeholder="Enter New imageUrl"
                />
              )}
            </div>
            <input type="submit" />
          </Form>
        ) : (
          <>
            <span>{name}</span>
            <Info>
              <p>{price}$</p>
              <div>
                {rating &&
                  Array(rating * 1)
                    .fill()
                    .map((_, i) => <p>⭐</p>)}
              </div>
            </Info>
          </>
        )}

        {currentUser && currentUser.id && (
          <AddItem
            onClick={() => {
              addItemsHandler(currentUser.id);
              setChange(!change);
            }}
          >
            Add Product
          </AddItem>
        )}

        {IsAdmin && (
          <>
            <UpdateItem className="update" onClick={() => setEdit(true)}>
              Update Product
            </UpdateItem>
            <RemoveItem className="remove" onClick={removeItem}>
              X
            </RemoveItem>
          </>
        )}
      </Details>
    </ProductCardContainer>
  );
};
export default ProductCard;
