import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div className="font-lato min-h-screen">
      <NavigationBar></NavigationBar>
      <main className="mt-10">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Main;
