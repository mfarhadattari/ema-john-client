import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  /* ------------- data from context ------------- */
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handelLoginUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((loginResult) => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <section className="container mx-auto">
      <div className="md:border-2 w-full p-5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form onSubmit={handelLoginUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered"
            />
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
