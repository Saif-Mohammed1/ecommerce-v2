import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUpStart } from "../../store/user/user.action";
import { Input, SignUpContainer } from "./signUp.styles";
import { ErrorStyle } from "../router/add-new-items/add-items.styles";

import { selectSignUpErrors } from "../../store/user/user.selectors";
import api from "../../utils/axios/axios";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const UserErrors = useSelector(selectSignUpErrors);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { name, email, password, confirmPassword } = formFields;
  const [error, setError] = useState([]);
  useEffect(() => {
    if (UserErrors) {
      setError(UserErrors);
    }
  }, [UserErrors]);

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
        dispatch(signUpStart(name, email, password, confirmPassword));
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <SignUpContainer>
      <form onSubmit={onSubmitHandler}>
        <h1>sign Up Form</h1>
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
        <div className="buttons">
          <button type="submit">Sign Up</button>
          <Link to="/auth">Already Have Email</Link>
        </div>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
