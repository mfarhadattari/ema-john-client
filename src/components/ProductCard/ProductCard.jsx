const ProductCard = ({ product }) => {
  const { _id, name, price, ratings, img, seller } = product;

  const handelAddToCart = (id) => {
    console.log(id);
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt={name} className="h-64 w-full" />
      </figure>
      <div className="card-body space-y-2 m-0">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <div className="m-0">
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings}</p>
        </div>
      </div>
      <button
        className="btn bg-[#FF9900] hover:text-white bg-opacity-50 text-black border-0 w-full"
        onClick={() => handelAddToCart(_id)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
