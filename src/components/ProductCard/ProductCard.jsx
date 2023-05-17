import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({ product }) => {
  const { _id, name, price, ratings, img, seller, shipping, quantity } =
    product;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelAddToCart = (id) => {
    if (user) {
      fetch(`https://mfarhad-ema-john.onrender.com/add-to-cart/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          productId: _id,
          email: user.email,
          img,
          name,
          price,
          shipping,
          quantity: 1,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId || data.modifiedCount > 0) {
            Swal.fire({
              title: "Added Successfully",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "OK",
              confirmButtonColor: "green",
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login!",
        icon: "warning",
        text: "Want to Login?",
        showConfirmButton: true,
        confirmButtonText: "YES",
        showCancelButton: true,
        cancelButtonText: "NO",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        } else {
          /* --------------  local here ----------------- */
        }
      });
    }
  };

  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt={name} className="h-64 w-full" />
      </figure>
      <div className="card-body space-y-2 m-0">
        <h2 className="card-title">{name}</h2>
        <p className="font-bold">Price: ${price}</p>
        <div className="m-0">
          <p className="font-bold">Manufacturer : {seller}</p>
          <div className="flex font-bold items-center gap-2">
            Rating :
            <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
          </div>
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
