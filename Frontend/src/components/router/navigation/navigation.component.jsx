import { Outlet, useNavigate } from "react-router-dom";
import { faSearch, faShop, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  SearchIcon,
  EShopIcon,
  SignOut,
  SearchFieldForm,
  Bars,
  NavContainer,
} from "./navigation.styles";
import CartIcon from "../../cartIcon/cartIcon.component";
import { useDispatch, useSelector } from "react-redux";
import {
  isAdminExist,
  selectCurrentUser,
} from "../../../store/user/user.selectors";
import { signOutStart } from "../../../store/user/user.action";
import { selectCartItems } from "../../../store/cart/cart.selectors";
import { useState } from "react";
import { useEffect } from "react";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems);
  const IsAdmin = useSelector(isAdminExist);
  const [searchFiled, setSearchFiled] = useState("");
  const [u, setU] = useState(false);
  const dispatch = useDispatch();
  const signOutHandler = () => dispatch(signOutStart());
  const navigate = useNavigate();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?name=${searchFiled}`);
    setSearchFiled("");
  };

  return (
    <>
      <NavigationContainer>
        <NavContainer>
          <LogoContainer to="/">
            <EShopIcon icon={faShop} />
          </LogoContainer>
          <NavLink to="/shop">
            <span className="eShop">eSHOP</span>
          </NavLink>
          <SearchFieldForm onSubmit={submitHandler}>
            <input
              type="search"
              placeholder="Looking For...?"
              onChange={(e) => setSearchFiled(e.target.value)}
              value={searchFiled}
            />
            <SearchIcon icon={faSearch} />
          </SearchFieldForm>
        </NavContainer>
        <Bars icon={faBars} onClick={toggleNavLinks}></Bars>
        <NavLinks clicked={showNavLinks}>
          {IsAdmin && (
            <NavLink to="/shop/addItems">
              <span className="add">+</span>
            </NavLink>
          )}
          {currentUser ? (
            <SignOut>
              <span>Hello : {currentUser.name} </span>
              <span className="out" onClick={signOutHandler}>
                Sign Out
              </span>
            </SignOut>
          ) : (
            <NavLink to="/auth">
              <p>
                <span>Hello: Guest</span> Sign in
              </p>
            </NavLink>
          )}
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
          {cartItems.length ? (
            <NavLink to="/checkOut">
              <CartIcon />
            </NavLink>
          ) : (
            <NavLink as="div" onClick={() => setU(!u)}>
              <CartIcon />
            </NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
