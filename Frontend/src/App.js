import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./store/user/user.action";
import { homeItemsStart } from "./store/home/home.action";
import Spinner from "./components/spinner/spinner.component";
import { selectCurrentUser } from "./store/user/user.selectors";
import { userCartId } from "./store/cart/cart.action";
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
const NotFoundPage = lazy(() =>
  import("./components/router/not-found-page/not-found-page.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(userCartId(currentUser.id));
    }
  }, []);
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  useEffect(() => {
    dispatch(homeItemsStart());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {currentUser ? (
            <Route path="auth" element={<Navigate to="*" />} />
          ) : (
            <Route path="auth/*" element={<Authentication />} />
          )}

          <Route path="checkOut" element={<CheckOut />} />
          <Route path="search" element={<SearchFiled />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
