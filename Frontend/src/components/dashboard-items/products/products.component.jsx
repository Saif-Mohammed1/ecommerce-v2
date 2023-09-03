import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableContainer } from "../home/home.styles";
import api from "../../../utils/axios/axios";
import {
  selectCategoriesArray,
  selectCategoriesErrors,
} from "../../../store/categories/categories.selectors";
import {
  AddItemsForm,
  ErrorStyle,
  FontAwesomeIcons,
  Group,
  Input,
} from "../../router/add-new-items/add-items.styles";
import { faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  addCategoriesStart,
  fetchCategoriesStart,
} from "../../../store/categories/categories.action";
import Spinner from "../../spinner/spinner.component";
const defaultField = {
  name: "",
  imageUrl: "",
  price: "",
  rating: "",
};

const AddProduct = () => {
  const categoriesArray = useSelector(selectCategoriesArray);
  const categoriesError = useSelector(selectCategoriesErrors);

  const [error, setError] = useState(categoriesError);
  // const [shopData, setShopData] = useState(categoriesArray);
  const [newItem, setNewItem] = useState(defaultField);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [image, setImage] = useState(false);
  useEffect(() => {
    setNewItem(defaultField);
    setSelectedTitle("");
    if (imageFile) setImageFile("");
  }, [categoriesArray]);
  useEffect(() => {
    setError(categoriesError);
  }, [categoriesError]);
  const dispatch = useDispatch();
  const addItem = async (title, newItem, event) => {
    const formData = new FormData();

    if (imageFile && imageFile !== "") {
      formData.append("imageFile", event.target.elements.imageFile.files[0]);
    }

    Object.entries(newItem).filter(([key, value]) => {
      if (value !== "" && value !== null) {
        formData.append(key, value);
      }
    });
    formData.append(
      "title",
      title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()
    );
    api
      .get("/sanctum/csrf-cookie")
      .then((res) => dispatch(addCategoriesStart(formData)))
      .catch((err) => {
        alert(err);
      });
  };

  const handleAddItem = (event) => {
    const { price, rating } = newItem;
    event.preventDefault();
    if (price === 0 || rating === 0) return;
    setError([]);
    addItem(selectedTitle, newItem, event);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem((newItem) => ({
      ...newItem,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };
  const iconClick = () => {
    if (
      newItem.imageUrl === "" &&
      // homeItem.imageUrl === undefined &&
      imageFile === ""
      // imageFile === undefined
    ) {
      setImage(!image);
    }
  };
  return (
    <AddItemsForm onSubmit={handleAddItem}>
      <Input
        type="text"
        name="title"
        placeholder="Enter New Title"
        value={selectedTitle}
        onChange={(event) =>
          setSelectedTitle(
            event.target.value.charAt(0).toUpperCase() +
              event.target.value.slice(1).toLowerCase()
          )
        }
        required
      />
      {error.title && <ErrorStyle>{error.title}</ErrorStyle>}
      <Input
        type="text"
        name="name"
        value={newItem.name}
        placeholder="Enter name"
        onChange={handleInputChange}
        required
      />
      {error.name && <ErrorStyle>{error.name}</ErrorStyle>}
      {image ? (
        <>
          <Group>
            <Input
              type="text"
              name="imageUrl"
              value={newItem.imageUrl}
              placeholder="Enter image URL"
              onChange={handleInputChange}
              required
            />
            <FontAwesomeIcons onClick={iconClick} icon={faImage} />
          </Group>
          {error.imageUrl && <ErrorStyle>{error.imageUrl}</ErrorStyle>}
        </>
      ) : (
        <>
          <Group>
            <Input
              type="file"
              name="imageFile"
              value={imageFile}
              placeholder="Enter image imageFile"
              onChange={(e) => {
                setImageFile(e.target.value);
              }}
              // onChange={handleHomeInputChange}
              required
            />
            <FontAwesomeIcons onClick={iconClick} icon={faLink} />
          </Group>
          {error.imageFile && <ErrorStyle>{error.imageFile}</ErrorStyle>}
        </>
      )}
      <Input
        type="number"
        name="price"
        value={newItem.price}
        placeholder="Enter price"
        onChange={handleInputChange}
        required
        min={1}
      />
      {error.price && <ErrorStyle>{error.price}</ErrorStyle>}
      <Input
        type="number"
        name="rating"
        value={newItem.rating}
        placeholder="Enter rating"
        onChange={handleInputChange}
        min={1}
        required
        max={5}
      />
      {error.rating && <ErrorStyle className="mb-2">{error.rating}</ErrorStyle>}
      <button>submit</button>
    </AddItemsForm>
  );
};
const Products = () => {
  const products = useSelector(selectCategoriesArray);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const [state, setState] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false);
    }
  }, []);
  const deleteItemHandler = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      dispatch(fetchCategoriesStart());
    } catch (error) {
      alert("Error deleting item!");
    }
  };
  return (
    <>
      {isLoading ? (
        <div style={{ gridArea: "content" }}>
          <Spinner />
        </div>
      ) : (
        <TableContainer>
          {state ? (
            <>
              <p
                style={{ cursor: "pointer", width: "fit-content" }}
                className=" ms-4"
                onClick={() => setState(false)}
              >
                Back..
              </p>
              <AddProduct />
            </>
          ) : (
            <Table>
              <caption>
                <div>
                  <p>
                    Total Products :<span> {products.length}</span>
                  </p>
                  <p className="addItem" onClick={() => setState(true)}>
                    Add New Product
                  </p>
                </div>
              </caption>

              <thead>
                <tr>
                  <td>Id</td>
                  <td>Category </td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Rating</td>
                  <td>ImageUrl</td>
                  <td>ImageFile</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {products.map(
                  ({ id, title, name, price, rating, imageUrl, imageFile }) => (
                    <Fragment key={id}>
                      <tr>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{rating}</td>
                        <td>
                          {imageUrl ? (
                            <img
                              //   style={{ width: "50px", height: "50px" }}
                              src={imageUrl}
                              alt={title}
                            />
                          ) : (
                            " empty"
                          )}
                        </td>
                        <td>
                          {imageFile ? (
                            <img
                              //   style={{ width: "50px", height: "50px" }}
                              src={imageFile}
                              alt={title}
                            />
                          ) : (
                            " empty"
                          )}
                        </td>
                        <td>
                          {/* <span>Edit</span> */}
                          <span onClick={() => deleteItemHandler(id)}>X</span>
                        </td>
                      </tr>
                    </Fragment>
                  )
                )}
              </tbody>
            </Table>
          )}
        </TableContainer>
      )}
    </>
  );
};

export default Products;
