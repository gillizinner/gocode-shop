//import logo from '.../logo.svg';
import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ButtonComp from "../ButtonComp/ButtonComp";
import { useState, useEffect } from "react";
function App() {
  const [productList, setProductList] = useState([]);

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
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const filterProductList = (selectedValue) => {
    setFilteredProductList(
      productList.filter((product) => product.category === selectedValue)
    );
  };
  return (
    <div>
      <ButtonComp></ButtonComp>
      <Header
        categories={categoriesList}
        filterByCategory={filterProductList}
      />
      <Products products={filteredProductList} />
    </div>
  );
}

export default App;
