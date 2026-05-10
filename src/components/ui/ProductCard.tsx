 

const ProductCard = ({ plant }) => {
  return (
    <div className="product-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <span>Rs. {plant.price}</span>
    </div>
  );
};

export default ProductCard;
