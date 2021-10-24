import "./Product/Product.css";
import Product from "./Product/Product";
import { useState, useContext } from "react";
import MyContext from "../MyContext";
function CartProduct({ id, image, title, price }) {
  const [cartList, setCartList] = useContext(MyContext);
  const getQuantity = () => {
    let currentProduct = cartList.filter((item) => item.id === id);
    return currentProduct[0]?.amount;
  };
  return (
    <>
      <div className="product-card">
        <Product id={id} image={image} title={title} price={price}></Product>
        {getQuantity()}
        <button
          onClick={() => {
            if (cartList.filter((item) => item.id === id).length < 1) {
              //if doesnt exists- add current item to cart list
              setCartList([
                ...cartList,
                {
                  id: id,
                  image: image,
                  title: title,
                  price: price,
                  amount: 1,
                },
              ]);
            } else {
              setCartList(
                cartList.map((product) => {
                  if (product.id === id) {
                    product.amount++;
                  }
                  return product;
                })
              );
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (cartList.length > 0) {
              if (cartList?.filter((item) => item.id === id)[0].amount === 1) {
                //if only one item exists- remove item from cart list
                setCartList(cartList.filter((item) => item.id !== id));
              } else if (
                cartList?.filter((item) => item.id === id)[0].amount > 1
              ) {
                //if more than one item exists- decrease item's quantity on cart list
                setCartList(
                  cartList.map((product) => {
                    if (product.id === id) {
                      product.amount--;
                    }
                    return product;
                  })
                );
              }
            }
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default CartProduct;
