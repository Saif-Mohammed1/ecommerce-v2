import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoriesStart } from "../../../store/categories/categories.action";
import {
  selectCategoriesArray,
  selectCategoriesErrors,
  selectIsLoading,
} from "../../../store/categories/categories.selectors";
import { homeFetchStart } from "../../../store/home/home.action";
import Spinner from "../../spinner/spinner.component";
import {
  AddItemsContainer,
  AddItemsForm,
  FontAwesomeIcons,
  Input,
  Group,
  ErrorStyle,
} from "./add-items.styles";
import { faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  selectHomeIsLoading,
  selectHomesErrors,
} from "../../../store/home/home.selector";
import api from "../../../utils/axios/axios";
const defaultField = {
  name: "",
  imageUrl: "",
  price: "",
  rating: "",
};
const defaultHomeField = {
  title: "",
  imageUrl: "",
  route: "",
  shop: "",
};

const AddItems = () => {
  const categoriesArray = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const categoriesError = useSelector(selectCategoriesErrors);
  const homeError = useSelector(selectHomesErrors);
  const homeLoading = useSelector(selectHomeIsLoading);

  const [error, setError] = useState(categoriesError);
  const [homePage, setHomePage] = useState(false);
  const [shopData, setShopData] = useState(categoriesArray);
  const [newItem, setNewItem] = useState(defaultField);
  const [homeItem, setHomeItem] = useState(defaultHomeField);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [image, setImage] = useState(false);
  const [imageFile, setImageFile] = useState("");

  useEffect(() => {
    if (homePage) {
      setError(homeError);
    } else {
      setError(categoriesError);
    }
  }, [categoriesError, homeError]);

  useEffect(() => {
    setShopData(categoriesArray);
  }, [categoriesArray]);

  useEffect(() => {
    if (homePage) {
      setHomeItem(defaultHomeField);
      if (imageFile) setImageFile("");
    } else {
      if (imageFile) setImageFile("");

      setSelectedTitle("");
      setNewItem(defaultField);
    }
  }, [homeLoading, isLoading]);

  const dispatch = useDispatch();

  // Rest of the component code...

  // mysql
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

  const handleHomeSubmit = async (e) => {
    const formData = new FormData();
    setError([]);
    e.preventDefault();
    homeItem.title =
      homeItem.title.charAt(0).toUpperCase() +
      homeItem.title.slice(1).toLowerCase();

    if (imageFile && imageFile !== "") {
      formData.append("imageFile", e.target.elements.imageFile.files[0]);
    }

    Object.entries(homeItem).filter(([key, value]) => {
      if (value !== "" && value !== null) {
        formData.append(key, value);
      }
    });
    api
      .get("/sanctum/csrf-cookie")
      .then((res) => dispatch(homeFetchStart(formData)))
      .catch((err) => {
        alert(err);
      });
  };

  const iconClick = () => {
    if (
      homeItem.imageUrl === "" &&
      // homeItem.imageUrl === undefined &&
      imageFile === ""
      // imageFile === undefined
    ) {
      setImage(!image);
    } else if (
      newItem.imageUrl === "" &&
      // homeItem.imageUrl === undefined &&
      imageFile === ""
      // imageFile === undefined
    ) {
      setImage(!image);
    }
  };
  const handleHomeInputChange = (event) => {
    const { name, value } = event.target;
    setHomeItem({ ...homeItem, [name]: value });
  };
  const clicked = (e) => {
    setError([]);
    if (e.target.value === "Home Page") {
      setImageFile("");
      setHomePage(true);
    } else {
      setImageFile("");
      setHomePage(false);
      setSelectedTitle(e.target.value);
    }
  };
  const titles = {};
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <AddItemsContainer>
          <select defaultValue="DEFAULT" onChange={clicked}>
            <option value="DEFAULT">Current Titles ...</option>

            <option value="Home Page">Home Page</option>

            {shopData.map(({ title }) => {
              if (!titles[title]) {
                titles[title] = title;
              }
              return null;
            })}
            {Object.keys(titles).map((title) => {
              return (
                <option key={title} value={title}>
                  {title}
                </option>
              );
            })}
          </select>
          {homePage ? (
            <AddItemsForm method="post" onSubmit={handleHomeSubmit}>
              <Input
                type="text"
                name="title"
                value={homeItem.title}
                placeholder="Enter The Title"
                onChange={handleHomeInputChange}
                required
              />
              {error.title && <ErrorStyle>{error.title}</ErrorStyle>}
              {image ? (
                <>
                  <Group>
                    <Input
                      type="text"
                      name="imageUrl"
                      value={homeItem.imageUrl}
                      placeholder="Enter image URL"
                      onChange={handleHomeInputChange}
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
                      required
                    />
                    <FontAwesomeIcons onClick={iconClick} icon={faLink} />
                  </Group>
                  {error.imageFile && (
                    <ErrorStyle>{error.imageFile}</ErrorStyle>
                  )}
                </>
              )}
              <Input
                type="text"
                name="shop"
                value={homeItem.shop}
                placeholder="Enter name for user default Shop Now"
                onChange={handleHomeInputChange}
              />
              {error.shop && <ErrorStyle>{error.shop}</ErrorStyle>}
              <Input
                type="text"
                name="route"
                value={homeItem.route}
                placeholder="Enter The route for example: shop/... "
                onChange={handleHomeInputChange}
                required
              />
              {error.route && (
                <ErrorStyle className="mb-3">{error.route}</ErrorStyle>
              )}
              <button>submit</button>
            </AddItemsForm>
          ) : (
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
                  {error.imageFile && (
                    <ErrorStyle>{error.imageFile}</ErrorStyle>
                  )}
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
              {error.rating && (
                <ErrorStyle className="mb-2">{error.rating}</ErrorStyle>
              )}
              <button>submit</button>
            </AddItemsForm>
          )}
        </AddItemsContainer>
      )}
    </>
  );
};
export default AddItems;
