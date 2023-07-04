import { useSelector } from "react-redux";
import {
  selectHomeIsLoading,
  selectHomeItems,
} from "../../../store/home/home.selector";
import HomeItems from "../../home-items/home-items.component";
import { HomeContainer } from "./home.styles";
import Spinner from "../../spinner/spinner.component";
import { memo } from "react";

const Home = memo(() => {
  /*
const lastItemId =
    SHOP_DATA[SHOP_DATA.length - 1].items[
      SHOP_DATA[SHOP_DATA.length - 1].items.length - 1
    ]
  const lastItem = SHOP_DATA.reduce(
    (acc, cur) => acc.concat(cur.items),
    []
  ).pop();*/

  const items = useSelector(selectHomeItems);
  const isLoading = useSelector(selectHomeIsLoading);

  return (
    <HomeContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        items.map((item) => <HomeItems key={item.id} items={item} />)
      )}
    </HomeContainer>
  );
});
export default Home;
