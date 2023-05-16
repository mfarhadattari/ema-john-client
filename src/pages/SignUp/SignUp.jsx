import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <section className="container mx-auto">
      <div className="border-2 w-full p-5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input type="text" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input type="url" className="input input-bordered" />
          </div>
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
            value="Sign Up"
            className="btn bg-[#FF9900] hover:text-white bg-opacity-50 text-black border-0 w-full mt-5"
          />
          <p className="text-center my-5 space-x-2">
            <span>Already have an account?</span>
            <Link to="/login" className="text-[#FF9900]">
              Login
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default SignUp;
