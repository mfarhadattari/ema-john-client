import { Outlet, useNavigation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import BarLoader from "../components/BarLoader/BarLoader";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="font-lato min-h-screen">
        <NavigationBar></NavigationBar>
        {navigation.state === "loading" ? (
          <div className="min-h-screen flex justify-center items-center ">
            <BarLoader></BarLoader>
          </div>
        ) : (
          <>
            <main className="mt-10">
              <Outlet></Outlet>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
