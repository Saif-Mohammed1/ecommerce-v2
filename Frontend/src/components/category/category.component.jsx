import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCategoriesArray,
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selectors";
import ProductCard from "../product-card/product-card.component";
import { BeforeProductCard } from "../product-card/product.styles";
import Spinner from "../spinner/spinner.component";
import { CategoryContainer } from "./category.styles";
import NotFoundPage from "../router/not-found-page/not-found-page.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesArray = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const [product, setProduct] = useState(
    categoriesMap[category.charAt(0).toLocaleUpperCase() + category.slice(1)]
  );

  const checkTitleExists = categoriesArray.some(
    (item) => item.title.toLowerCase() === category
  );

  useEffect(() => {
    setProduct(
      categoriesMap[category.charAt(0).toLocaleUpperCase() + category.slice(1)]
    );
  }, [category, categoriesMap]);

  //mysql

  return (
    <>
      {checkTitleExists ? (
        isLoading ? (
          <Spinner />
        ) : (
          <CategoryContainer>
            <h2>{category.toUpperCase()}</h2>
            <BeforeProductCard>
              {product &&
                product.map((item) => (
                  <ProductCard key={item.id} item={item} title={category} />
                ))}
            </BeforeProductCard>
          </CategoryContainer>
        )
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};

export default Category;
