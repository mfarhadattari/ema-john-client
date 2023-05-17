import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const OrdersReview = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    console.log(user);
  }
  
  return <div>{user ? <h1>{user.displayName}</h1> : <h1>No user</h1>}</div>;
};

export default OrdersReview;
