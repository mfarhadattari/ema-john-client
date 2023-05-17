import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useLoadOrdersData from "../../hooks/useLoadOrdersData";
import BarLoader from "../../components/BarLoader/BarLoader";
import OrderItem from "../../components/OrderItem/OrderItem";
import Cart from "../../components/Cart/Cart";

const OrdersReview = () => {
  const { orders, loading } = useLoadOrdersData();
  const { user } = useContext(AuthContext);

  return (
    <section className="container mx-auto">
      {loading || !orders ? (
        <BarLoader></BarLoader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
          <div className="overflow-x-auto w-full col-span-2">
            <div className="w-full">
              {orders.length === 0 && (
                <div className="w-full flex items-center justify-center h-full">
                  <div className="h-40 w-40 text-center font-bold">
                    NO DATA FOUND
                  </div>
                </div>
              )}
              {orders.map((order) => (
                <OrderItem key={order._id} order={order}></OrderItem>
              ))}
            </div>
          </div>
          <div className="w-full mx-auto col-span-2 lg:col-span-1">
            <Cart orders={orders}></Cart>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrdersReview;
