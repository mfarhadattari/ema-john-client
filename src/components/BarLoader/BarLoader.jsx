import { Bars } from "react-loader-spinner";

const BarLoader = () => {
  return (
    <div className="flex justify-center">
      <Bars
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default BarLoader;
