import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selectors";
import CategoryPreview from "../category-preview/category-preview.component";
import Spinner from "../spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  /*
const lastItemId =
    SHOP_DATA[SHOP_DATA.length - 1].items[
      SHOP_DATA[SHOP_DATA.length - 1].items.length - 1
    ]
  const lastItem = SHOP_DATA.reduce(
    (acc, cur) => acc.concat(cur.items),
    []
  ).pop();*/

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, inx) => {
          const items = categoriesMap[title];

          return <CategoryPreview key={inx} items={items} title={title} />;
        })
      )}
    </>
  );
};
export default CategoriesPreview;
