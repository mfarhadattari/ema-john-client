import { FaPray, FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import useLoadOrdersData from "../../hooks/useLoadOrdersData";

const Cart = ({ orders, handelClearCart }) => {
  let totalPrice = 0;
  let totalShippingCharge = 0;
  orders.forEach((order) => {
    const quantity = parseInt(order.quantity);
    const eachPrice = parseFloat(order.price) * quantity;
    totalPrice = totalPrice + eachPrice;
    const eachShippingCharge = (eachPrice * parseFloat(order.shipping)) / 100;
    totalShippingCharge = totalShippingCharge + eachShippingCharge;
  });

  const total = totalPrice + totalShippingCharge;
  const tax = `${total > 1000 ? (total * 0.1).toFixed(2) : 0}`;
  const grandTotal = total + parseFloat(tax);

  return (
    <div className="w-full mx-auto h-fit border rounded-xl shadow-xl lg:sticky lg:top-40 p-5">
      <h2 className="text-center text-3xl font-bold underline underline-offset-8">
        Order Summary
      </h2>
      <div className="mt-10 space-y-3">
        <p className="text-xl font-medium">Selected Items: {orders?.length} </p>
        <p className="text-xl font-medium">
          Total Price: $ {totalPrice.toFixed(2)}{" "}
        </p>
        <p className="text-xl font-medium">
          Total Shipping Charge: $ {totalShippingCharge.toFixed(2)}
        </p>
        <p className="text-xl font-medium">Tax: ${tax}</p>
        <h4 className="text-xl font-bold">
          Grand Total: $ {grandTotal.toFixed(2)}{" "}
        </h4>
      </div>
      <div className="space-y-3 mt-5">
        <button
          className="btn w-full flex justify-between mx-auto"
          onClick={handelClearCart}
        >
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
