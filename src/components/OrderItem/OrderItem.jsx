import { FaTrashAlt } from "react-icons/fa";

const OrderItem = ({ order }) => {
  const { img, name, price, quantity, shipping } = order;
  return (
    <div className="flex justify-between items-center mt-5 border-2 shadow-sm p-2 rounded-lg">
      <div className="flex items-center gap-2 md:gap-10">
        <div className="avatar">
          <figure className="rounded-xl w-20 md:w-24 md:h-24">
            <img src={img} />
          </figure>
        </div>
        <div className="font-medium space-y-1">
          <h1 className="font-bold md:text-lg">{name}</h1>
          <h4>
            Price: <span className="text-[#FF9900]">${price}</span>
          </h4>
          <h4>
            Quantity: <span className="text-[#FF9900]">{quantity}</span>
          </h4>
        </div>
      </div>
      <div className="md:p-5">
        <button className="btn btn-circle bg-[#EB5757] bg-opacity-30 text-[#EB5757] text-xl border-0 bg">
          <FaTrashAlt></FaTrashAlt>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
