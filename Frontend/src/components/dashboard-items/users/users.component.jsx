import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, TableContainer } from "../home/home.styles";
import api from "../../../utils/axios/axios";
import { selectCurrentUser } from "../../../store/user/user.selectors";
import { signOutStart } from "../../../store/user/user.action";
// import Spinner from "../../spinner/spinner.component";
import { ErrorStyle, Input } from "../../router/add-new-items/add-items.styles";
import Spinner from "../../spinner/spinner.component";
const defaultFormFields = {
  name: "",
  email: "",
  admin: "",
  password: "",
  confirmPassword: "",
};
const AddUser = () => {
  //   const UserErrors = useSelector(selectSignUpErrors);

  const [formFields, setFormFields] = useState(defaultFormFields);
  //   const dispatch = useDispatch();
  const { name, email, admin, password, confirmPassword } = formFields;
  const [error, setError] = useState([]);
  //   useEffect(() => {
  //     if (UserErrors) {
  //       setError(UserErrors);
  //     }
  //   }, [UserErrors]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError([]);
    api
      .get("/sanctum/csrf-cookie")
      .then((response) => {
        api
          .post("/users/dashboard", {
            name,
            email,
            admin,
            password,
            confirmPassword,
          })
          .then((res) => res.status === 200 && setFormFields(defaultFormFields))
          .catch((err) => setError(err.response.data.errors));
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <form className="d-flex flex-column p-4" onSubmit={onSubmitHandler}>
      <h1 className="text-center">Add User</h1>
      <label>displayName :</label>
      <Input
        onChange={onChangeHandler}
        type="text"
        placeholder="Enter Your Name"
        required
        name="name"
        value={name}
      />
      {error.name && <ErrorStyle>{error.name}</ErrorStyle>}
      <label>Email :</label>
      <Input
        onChange={onChangeHandler}
        type="email"
        placeholder="Enter Your Email :"
        required
        name="email"
        value={email}
      />
      {error.email && <ErrorStyle>{error.email}</ErrorStyle>}
      <label>Admin :</label>
      <Input
        onChange={onChangeHandler}
        type="admin"
        placeholder=" for being an admin enter 1 for user enter 0"
        required
        name="admin"
        min="0"
        max="1"
        value={admin}
      />
      {error.admin && <ErrorStyle>{error.admin}</ErrorStyle>}
      <label>Password :</label>
      <Input
        onChange={onChangeHandler}
        type="password"
        placeholder="Enter Your Password"
        required
        name="password"
        value={password}
      />
      {error.password && <ErrorStyle>{error.password}</ErrorStyle>}
      <label>ConfirmPassword :</label>
      <Input
        onChange={onChangeHandler}
        type="password"
        placeholder="ConfirmPassword Your Password"
        required
        name="confirmPassword"
        value={confirmPassword}
      />
      {error.confirmPassword && (
        <ErrorStyle className="mb-2">{error.confirmPassword}</ErrorStyle>
      )}
      <div className="buttons text-center">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
const User = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [indx, setIndx] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    Users();
  }, []);
  useEffect(() => {
    Users();
  }, [state]);

  const deleteUser = async (id) => {
    try {
      if (id === currentUser.id) {
        await dispatch(signOutStart());
      }
      await api.delete(`/users/dashboard/${id}`);
      Users();
    } catch (error) {
      alert("Error deleting item!");
    }
  };
  const Users = async () => {
    try {
      const user = await api.get("/users/dashboard");
      setUsers(user.data);
      setIsLoading(false);
    } catch (err) {
      alert("couldn't get users");
    }
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // const { admin, email } = e.target;
    if (e.target.admin.value > 1) return;
    try {
      await api.put(
        `/users/dashboard/${e.target.admin.getAttribute("id_data")}`,
        {
          admin: e.target.admin.value,
          email: e.target.admin.getAttribute("email"),
        }
      );
      setIsEdit(false);
      Users();
    } catch (err) {
      console.log("err", err);
    }

    // console.log("admin", e.target.admin.value);
    // console.log("email", e.target.admin.getAttribute("email"));
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
                className="  ms-4"
                onClick={() => setState(false)}
              >
                Back..
              </p>
              <AddUser />
            </>
          ) : (
            <Table>
              <caption>
                <div>
                  <p>
                    Total Users :<span> {users.length}</span>
                  </p>
                  <p className="addItem" onClick={() => setState(true)}>
                    Add New User
                  </p>
                </div>
              </caption>

              <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Email</td>
                  {/* <td>Email_verified_at </td> */}
                  <td>Admin</td>
                  <td>Created_at</td>
                  <td>Social_type</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {users.map(
                  ({ id, name, email, admin, created_at, social_type }) => (
                    <Fragment key={id}>
                      <tr className={id === currentUser.id ? "active" : ""}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                          {isEdit && id === indx ? (
                            <form onSubmit={onSubmitHandler}>
                              <input
                                name="admin"
                                email={email}
                                id_data={id}
                                type="number"
                                min="0"
                                max="1"
                                required
                              />
                              {/* <input type="submit" value="submit" /> */}
                            </form>
                          ) : (
                            <>{admin === 1 ? "true" : "false"}</>
                          )}
                        </td>
                        <td>{created_at}</td>
                        <td>{social_type ? social_type : "null"}</td>
                        <td>
                          <span
                            onClick={() => {
                              setIsEdit(true);
                              setIndx(id);
                            }}
                          >
                            Edit
                          </span>
                          <span onClick={() => deleteUser(id)}>X</span>
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

export default User;
