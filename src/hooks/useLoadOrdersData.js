import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useLoadOrdersData = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(
        `https://mfarhad-ema-john.onrender.com/orders?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "ema-john-user-token"
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setOrders(data);
          }
          setLoading(false);
        });
    } else {
      setOrders(null);
      setLoading(false);
    }
  }, [user]);

  return { orders, loading };
};

export default useLoadOrdersData;
