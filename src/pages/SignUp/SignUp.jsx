import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  /* ------------- data from context ------------- */
  const { createUser, logOutUser, setUserDisplayName, setUserPhotoURL } =
    useContext(AuthContext);

  const navigate = useNavigate();

  /* ------------ sign up handler ------------ */
  const handelSignUpUser = (event) => {
    event.preventDefault();

    const form = event.target;

    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((signUpResult) => {
        if (displayName) {
          setUserDisplayName(displayName);
        }
        if (photoURL) {
          setUserPhotoURL(photoURL);
        }

        Swal.fire({
          title: "Sign Up Successfully!",
          text: "Please Login",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          form.reset();
          navigate("/login");
        });

        logOutUser();
        form.reset();
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <section className="container mx-auto">
      <div className="md:border-2 w-full p-5 md:w-1/2 lg:w-1/3 mx-auto rounded-lg">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handelSignUpUser}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input type="text" name="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoURL"
              className="input input-bordered"
            />
          </div>
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
