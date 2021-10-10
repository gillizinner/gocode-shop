import './Products.css'
import Product from "../Product/Product";
function Products({products}) {
  return (
    <section className="products">
      {products.map((productItem) => <Product key={productItem.id} image={productItem.image} description={productItem.description} price={productItem.price}></Product>)}
    </section> 
  );
}

export default Products;