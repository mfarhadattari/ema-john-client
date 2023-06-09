import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import OrdersReview from "../pages/OrdersReview/OrdersReview";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error/Error";
import useLoadOrdersData from "../hooks/useLoadOrdersData";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://mfarhad-ema-john.onrender.com/totalProducts"),
      },
      {
        path: "/orders-review",
        element: <OrdersReview></OrdersReview>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },

      /* ---------- error page ---------------- */
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);

export default routes;
