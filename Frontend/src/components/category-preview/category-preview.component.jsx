import { useState } from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";

const CategoryPreview = ({ items, title }) => {
  // const itemsArray = [];
  // itemsArray.push(items);
  // console.log("itemsArray", itemsArray);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {items
          .filter((_, indx) => indx < 4)
          .map((item, indx) => (
            <ProductCard key={item.id || indx} item={item} title={title} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
