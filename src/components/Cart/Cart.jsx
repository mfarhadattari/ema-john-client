import { FaPray, FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const Cart = () => {
  return (
    <div className="w-full mx-auto h-fit border rounded-xl shadow-xl lg:sticky lg:top-40 p-5">
      <h2 className="text-center text-3xl font-bold underline underline-offset-8">
        Order Summary
      </h2>
      <div className="mt-10 space-y-3">
        <p className="text-xl font-medium">Selected Items: 6 </p>
        <p className="text-xl font-medium">Total Price: $1140 </p>
        <p className="text-xl font-medium">Total Shipping Charge: $5 </p>
        <p className="text-xl font-medium">Tax: $114 </p>
        <h4 className="text-xl font-bold">Grand Total: $1559 </h4>
      </div>
      <div className="space-y-3 mt-5">
        <button className="btn w-full flex justify-between mx-auto">
          Clear Cart <FaTrashAlt></FaTrashAlt>
        </button>
        <button className="btn w-full flex justify-between mx-auto">
          Proceed Checkout <MdPayment></MdPayment>
        </button>
      </div>
    </div>
  );
};

export default Cart;
