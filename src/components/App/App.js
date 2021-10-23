import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ButtonComp from "../ButtonComp/ButtonComp";
import Cart from "../Cart";
import { useState, useEffect } from "react";
import MyContext from "../../MyContext";
import TemporaryDrawer from "../Drawer";
function App() {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((List) => {
        setProductList(List);
        setFilteredProductList(List);
      });
  }, []);
  const categoriesList = productList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  const filterProductList = (selectedValue) => {
    setFilteredProductList(
      productList.filter((product) => product.category === selectedValue)
    );
  };
  return (
    <div>
      <MyContext.Provider value={[cartList, setCartList]}>
        {/* <Cart /> */}
        <ButtonComp></ButtonComp>
        <TemporaryDrawer />
        <Header
          categories={categoriesList}
          filterByCategory={filterProductList}
        />
        <Products products={filteredProductList} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
