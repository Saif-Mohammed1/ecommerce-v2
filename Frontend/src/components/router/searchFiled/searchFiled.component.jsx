import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectCategoriesArray } from "../../../store/categories/categories.selectors";
import ProductCard from "../../product-card/product-card.component";
import { BeforeProductCard } from "../../product-card/product.styles";
import { EmptyItems, SearchFieldContainer } from "./searchFiled.style";

const SearchFiled = () => {
  const categoriesArray = useSelector(selectCategoriesArray);
  const [useSearch, setUseSearch] = useSearchParams();
  const [data, setData] = useState(categoriesArray);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(categoriesArray);
  }, [categoriesArray]);
  useEffect(() => {
    const filteredData = data.filter(({ name }) =>
      name.toLowerCase().startsWith(`${useSearch.get("name").toLowerCase()}`)
    );
    setFilteredData(filteredData);
  }, [useSearch.get("name"), categoriesArray]);
  /*
  useEffect(() => {
    setFilteredData(
      data.map(({ items ,title}) =>
        items.filter(({ name }) => {
          return name
            .toLowerCase()
            .startsWith(`${useSearch.get("name").toLowerCase()}`);
        })
      )
    );
  }, [useSearch.get("name")]);*/
  return (
    <SearchFieldContainer>
      {filteredData.length ? (
        <BeforeProductCard>
          {filteredData.map((item, indx) => (
            <ProductCard key={item.id || indx + 1} item={item} />
          ))}
        </BeforeProductCard>
      ) : (
        <EmptyItems> There are no Items To Show</EmptyItems>
      )}
    </SearchFieldContainer>
  );
};
export default SearchFiled;
