import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  googlePopSignIn,
  signInWithEmailAndPasswordStart,
} from "../../store/user/user.action";
import { Input, LinkS, SignInContainer } from "./signIn.styles";
import { ErrorStyle } from "../router/add-new-items/add-items.styles";
import { selectSignInErrors } from "../../store/user/user.selectors";
const defaultFormField = { email: "", password: "" };
const SignInForm = () => {
  const [formField, setFormFiled] = useState(defaultFormField);
  const [error, setError] = useState([]);
  // const [remember, setRemember] = useState(false);
  const UserErrors = useSelector(selectSignInErrors);
  useEffect(() => {
    if (UserErrors) {
      setError(UserErrors);
    }
  }, [UserErrors]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formField;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError([]);
    if (!email || !password) return;

    dispatch(signInWithEmailAndPasswordStart(email, password));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFiled({ ...formField, [name]: value });
  };

  const googleSignIn = () => {
    dispatch(googlePopSignIn());
    navigate("/");
  };
  return (
    <SignInContainer>
      <form onSubmit={onSubmitHandler}>
        <h1>Login Form</h1>
        <label>Username :</label>
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
          placeholder="Enter Your Password :"
          required
          name="password"
          value={password}
        />
        {error.password && <ErrorStyle>{error.password}</ErrorStyle>}
        {/* <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            name="remember"
            id="remember"
            onChange={(e) => {
              setRemember(e.target.checked ? 1 : 0);
            }}
          />
          <label className="form-check-label" htmlFor="remember">
            Remember Me
          </label>
        </div> */}
        <div className="buttons">
          <button type="submit">Login</button>
          <button type="button" onClick={googleSignIn}>
            Sign in With Google
          </button>
        </div>
        <LinkS to="signup">Sign Up!</LinkS>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
