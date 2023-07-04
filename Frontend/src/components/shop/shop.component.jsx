import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import AddItems from "../router/add-new-items/add-items.component";
import { isAdminExist } from "../../store/user/user.selectors";
import NotFoundPage from "../router/not-found-page/not-found-page.component";

const Shop = () => {
  const dispatch = useDispatch();
  const adminExist = useSelector(isAdminExist);

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
      {adminExist ? (
        <Route path="/addItems" element={<AddItems />} />
      ) : (
        <Route path="/addItems" element={<NotFoundPage />} />
      )}
    </Routes>
  );
};
export default Shop;
