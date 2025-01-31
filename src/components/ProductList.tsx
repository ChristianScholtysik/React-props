import "./ProductList.css";
import ProductCard from "./ProductCard";

const productArray = [
  {
    title: "Cocooil",
    price: "$ 30",
    img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
  },
  {
    title: "Irgendwas",
    price: "$ 50 ",
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Noch was",
    price: "$ 10 ",
    img: "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="list">
      <h2>Products</h2>
      <div className="grid-layout">
        {productArray.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
