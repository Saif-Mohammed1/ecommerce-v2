import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomeItems,
  selectHomesErrors,
} from "../../../store/home/home.selector";
import { Table, TableContainer } from "./home.styles";
import {
  homeFetchStart,
  homeItemsStart,
} from "../../../store/home/home.action";
import api from "../../../utils/axios/axios";
import {
  AddItemsForm,
  ErrorStyle,
  FontAwesomeIcons,
  Group,
  Input,
} from "../../router/add-new-items/add-items.styles";
import { faImage, faLink } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/spinner.component";
const defaultHomeField = {
  title: "",
  imageUrl: "",
  route: "",
  shop: "",
};
const AddHomeItems = () => {
  const homeError = useSelector(selectHomesErrors);
  const homeItems = useSelector(selectHomeItems);

  const [error, setError] = useState([]);
  const [homeItem, setHomeItem] = useState(defaultHomeField);

  const [image, setImage] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setError(homeError);
  }, [homeError]);
  useEffect(() => {
    setHomeItem(defaultHomeField);
    if (imageFile) setImageFile("");
  }, [homeItems]);
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
  const handleHomeInputChange = (event) => {
    const { name, value } = event.target;
    setHomeItem({ ...homeItem, [name]: value });
  };

  const iconClick = () => {
    if (
      homeItem.imageUrl === "" &&
      // homeItem.imageUrl === undefined &&
      imageFile === ""
      // imageFile === undefined
    ) {
      setImage(!image);
    }
  };
  return (
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
          {error.imageFile && <ErrorStyle>{error.imageFile}</ErrorStyle>}
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
      {error.route && <ErrorStyle className="mb-3">{error.route}</ErrorStyle>}
      <button>submit</button>
    </AddItemsForm>
  );
};

const Home = () => {
  const items = useSelector(selectHomeItems);
  const [state, setState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length >= 0) {
      setIsLoading(false);
    }
  }, [items]);
  const deleteItemHandler = async (id) => {
    try {
      await api.delete(`/home/${id}`);
      dispatch(homeItemsStart());
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
              {/* // <div style={{ width: "calc( 100% - 175px )", marginLeft: "170px" }}> */}
              <p
                style={{ cursor: "pointer", width: "fit-content" }}
                className="  ms-4"
                onClick={() => setState(false)}
              >
                Back..
              </p>
              <AddHomeItems />
              {/* // </div> */}
            </>
          ) : (
            <Table>
              <caption>
                <div>
                  <p>
                    Total Routes :<span> {items.length}</span>
                  </p>
                  <p className="addItem" onClick={() => setState(true)}>
                    add Routes
                  </p>
                </div>
              </caption>

              <thead>
                <tr>
                  <td>Id</td>
                  <td>Category </td>
                  <td>Shop</td>
                  <td>Route</td>
                  <td>ImageUrl</td>
                  <td>ImageFile</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {items.map(
                  ({ id, title, shop, route, imageUrl, imageFile }) => (
                    <Fragment key={id}>
                      <tr>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{shop}</td>
                        <td>{route}</td>
                        <td>
                          {imageUrl ? (
                            <img
                              // style={{ width: "50px", height: "50px" }}
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
                              // style={{ width: "50px", height: "50px" }}
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

export default Home;
