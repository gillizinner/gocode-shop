import "./Products/Products.css";
import CartProduct from "./CartProduct";
import { useContext } from "react";
import MyContext from "../MyContext";
function CartProducts() {
  const [cartList, setCartList] = useContext(MyContext);
  return (
    <section className="products">
      {cartList?.map((productItem) => (
        <CartProduct
          key={productItem.id}
          id={productItem.id}
          image={productItem.image}
          title={productItem.title}
          price={productItem.price}
        ></CartProduct>
      ))}
    </section>
  );
}

export default CartProducts;
