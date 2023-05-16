import { Outlet, useNavigation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import BarLoader from "../components/BarLoader/BarLoader";

const Main = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      <div className="font-lato min-h-screen">
        {navigation.state === "loading" ? (
          <div className="min-h-screen flex justify-center items-center ">
            <BarLoader></BarLoader>
          </div>
        ) : (
          <>
            <NavigationBar></NavigationBar>
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
