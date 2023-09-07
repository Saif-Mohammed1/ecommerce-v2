import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./store/user/user.action";
import { homeItemsStart } from "./store/home/home.action";
import Spinner from "./components/spinner/spinner.component";
import { isAdminExist, selectCurrentUser } from "./store/user/user.selectors";
import { userCartId } from "./store/cart/cart.action";
import { selectCartCount } from "./store/cart/cart.selectors";
import axios from "axios";
const Navigation = lazy(() =>
  import("./components/router/navigation/navigation.component")
);
const Home = lazy(() => import("./components/router/home/home.component"));
const Shop = lazy(() => import("./components/shop/shop.component"));
const Authentication = lazy(() =>
  import("./components/router/authentication/authentication")
);
const CheckOut = lazy(() =>
  import("./components/router/checkOut/checkOut.component")
);
const SearchFiled = lazy(() =>
  import("./components/router/searchFiled/searchFiled.component")
);
const About = lazy(() => import("./components/router/about/about.component"));
const Dashboard = lazy(() =>
  import("./components/router/dashboard/dashboard.component")
);

const NotFoundPage = lazy(() =>
  import("./components/router/not-found-page/not-found-page.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const adminExist = useSelector(isAdminExist);

  const count = useSelector(selectCartCount);

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(userCartId(currentUser.id));
    }
  }, []);

  useEffect(() => {
    dispatch(homeItemsStart());
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://laravel-edb.000webhostapp.com/api/opt-clear")
  //     .then((re) => console.log("re", re))
  //     .catch((err) => console.log("err", err));
  // }, []);

  // const view = document.querySelector("#root ");

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {!currentUser && <Route path="auth/*" element={<Authentication />} />}
          {count && <Route path="checkOut" element={<CheckOut />} />}
          <Route path="search" element={<SearchFiled />} />
          <Route path="about" element={<About />} />
          {adminExist && <Route path="dashboard/*" element={<Dashboard />} />}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
