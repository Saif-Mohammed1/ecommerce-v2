import React, { useEffect, useState } from "react";
import Home from "../../dashboard-items/home/home.component";
import { DashboardContainer, DivContainer } from "./dashboard.styles";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Products from "../../dashboard-items/products/products.component";
import User from "../../dashboard-items/users/users.component";
import { fetchCategoriesStart } from "../../../store/categories/categories.action";
import { useDispatch } from "react-redux";
import NotFoundPage from "../not-found-page/not-found-page.component";
import { faHome, faSignOut, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOutStart } from "../../../store/user/user.action";

export const Side = () => {
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  const ListItems = [
    { text: "Home", link: "", icon: faHome },
    { text: "Products", link: "products", icon: faProductHunt },
    { text: "Users", link: "users", icon: faUsers },
  ];
  const signOutHandler = () => dispatch(signOutStart());

  return (
    <>
      <DashboardContainer>
        <h3>Dashboard</h3>
        <ul>
          {ListItems.map(({ text, link, icon }, indx) => (
            <li
              key={indx}
              onClick={() => setActive(indx)}
              className={active === indx ? "active" : ""}
            >
              <Link to={link}>
                <FontAwesomeIcon className="me-2" icon={icon} />
                <span> {text}</span>
              </Link>
            </li>
          ))}
          <li onClick={signOutHandler}>
            <Link to={"#"}>
              <FontAwesomeIcon className="me-2" icon={faSignOut} />
              <span> Log Out</span>
            </Link>
          </li>
        </ul>
      </DashboardContainer>
      <Outlet />
    </>
  );
};
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <DivContainer>
      <Routes>
        <Route path="/" element={<Side />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<User />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </DivContainer>
  );
};
export default Dashboard;
