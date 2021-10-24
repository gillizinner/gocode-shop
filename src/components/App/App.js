import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ButtonComp from "../ButtonComp/ButtonComp";
import Cart from "../Cart";
import { useState, useEffect } from "react";
import MyContext from "../../MyContext";
import TemporaryDrawer from "../Drawer";
import RangeSlider from "../../RangeSlider";
function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [filterByPriceProductList, setfilterByPriceProductList] =
    useState(filteredProductList);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((List) => {
        setProductList(List);
        setFilteredProductList(List);
        setfilterByPriceProductList(List);
      });
  }, []);
  const categoriesList = productList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const filterProductListByCategory = (selectedValue) => {
    setFilteredProductList(
      productList.filter((product) => product.category === selectedValue)
    );
    setfilterByPriceProductList(
      //why doesnt work setfilterByPriceProductList(FilteredProductList)
      productList.filter((product) => product.category === selectedValue)
    );
  };
  const filterProductListByPrice = ([minPrice, maxPrice]) => {
    setfilterByPriceProductList(
      filteredProductList.filter(
        (product) => product.price < maxPrice && product.price > minPrice
      )
    );
    // console.log([minPrice, maxPrice]);
    // console.log(filterByPriceProductList);
  };
  return (
    <div>
      <MyContext.Provider value={[cartList, setCartList]}>
        {/* <Cart /> */}
        <ButtonComp></ButtonComp>
        <TemporaryDrawer />
        <RangeSlider
          filterByPrice={filterProductListByPrice}
          products={productList}
        />
        <Header
          categories={categoriesList}
          filterByCategory={filterProductListByCategory}
        />
        <Products products={filterByPriceProductList} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
