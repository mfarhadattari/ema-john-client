import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  return (
    <section className="container mx-auto">
      <div className="border-2 w-full p-5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input type="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input type="password" className="input input-bordered" />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn bg-[#FF9900] hover:text-white bg-opacity-50 text-black border-0 w-full mt-5"
          />
          <p className="text-center my-5 space-x-2">
            <span>New to Ema-john?</span>
            <Link to="/sign-up" className="text-[#FF9900]">
              Create Account
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
