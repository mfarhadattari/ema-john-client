import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const useLoadOrdersData = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetch(`https://mfarhad-ema-john.onrender.com/orders?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "ema-john-user-token"
          )}`,
        },
      })
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

  /* ----------------- remove orders product remove ------------------- */
  const handelRemoveProduct = (id) => {
    Swal.fire({
      title: "Want to remove?",
      color: "red",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "YES",
      cancelButtonColor: "green",
      cancelButtonText: "NO",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`https://mfarhad-ema-john.onrender.com/remove-from-cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingOrders = orders.filter(
                (order) => order._id !== id
              );
              setOrders(remainingOrders);
              Swal.fire({
                title: "Want to remove?",
                icon: "success",
                showConfirmButton: true,
                confirmButtonText: "YES",
              });
            }
          });
      }
    });
  };

  /* ------------------ handle clear the cart----------------- */
  const handelClearCart = () => {
    Swal.fire({
      title: "Want to remove?",
      color: "red",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "red",
      confirmButtonText: "YES",
      cancelButtonColor: "green",
      cancelButtonText: "NO",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`https://mfarhad-ema-john.onrender.com/clear-cart?email=${user.email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "ema-john-user-token"
            )}`,
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setOrders([]);
              Swal.fire({
                title: "Want to remove?",
                icon: "success",
                showConfirmButton: true,
                confirmButtonText: "YES",
              });
            }
          });
      }
    });
  };

  return { orders, loading, handelRemoveProduct, handelClearCart };
};

export default useLoadOrdersData;
