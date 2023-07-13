import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  googlePopSignIn,
  googleSignInSuccess,
  signInWithEmailAndPasswordStart,
} from "../../store/user/user.action";
import { Input, LinkS, SignInContainer } from "./signIn.styles";
import { ErrorStyle } from "../router/add-new-items/add-items.styles";
import { selectSignInErrors } from "../../store/user/user.selectors";
import api from "../../utils/axios/axios";
const defaultFormField = { email: "", password: "" };
const SignInForm = () => {
  const [formField, setFormFiled] = useState(defaultFormField);
  const [error, setError] = useState([]);
  const [useSearch, setUseSearch] = useSearchParams();
  const { email, password } = formField;

  // const [remember, setRemember] = useState(false);
  const UserErrors = useSelector(selectSignInErrors);

  const dispatch = useDispatch();
  useEffect(() => {
    if (UserErrors) {
      setError(UserErrors);
    }
  }, [UserErrors]);
  useEffect(() => {
    if (useSearch.get("errors")) {
      setError({
        email: useSearch.get("errors"),
        // "Email already exists and is authenticated with a social account",
      });
    }
  }, [useSearch.get("errors")]);
  useEffect(() => {
    if (useSearch.get("token")) {
      localStorage.setItem("Token", useSearch.get("token"));
      dispatch(googleSignInSuccess());
    }
  }, [useSearch.get("token")]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError([]);
    if (!email || !password) return;
    api
      .get("/sanctum/csrf-cookie")
      .then((response) => {
        dispatch(signInWithEmailAndPasswordStart(email, password));
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFiled({ ...formField, [name]: value });
  };

  const googleSignIn = () => {
    api
      .get("/auth/google")
      .then((response) => {
        window.location.href = response.data.redirect;

        // window.open(response.data.redirect, "Popup", "width=600,height=400");
      })

      .catch((error) => {
        console.error(error);
      });
    // dispatch(googlePopSignIn());
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
