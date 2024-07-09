import "./ProductCard.css";

interface ProductProps {
  title: string;
  price: string;
  img: string;
}

const ProductCard: React.FC<ProductProps> = (props) => {
  return (
    <div className="product-card">
      <img src={props.img} alt="product" />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;
