import "./Products.css";
import CartProduct from "../CartProduct";
function Products({ products }) {
  return (
    <section className="products">
      {products.map((productItem) => (
        <CartProduct
          id={productItem.id}
          key={productItem.id}
          image={productItem.image}
          title={productItem.title}
          price={productItem.price}
        ></CartProduct>
      ))}
    </section>
  );
}

export default Products;
