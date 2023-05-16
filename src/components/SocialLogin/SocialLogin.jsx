import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  /* ------------ context date ------------- */
  const { loginUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  /* ----------handel googleSignIn ----------- */
  const handelGoogleSignIn = () => {
    loginUserWithGoogle()
      .then((loginResult) => {
        Swal.fire({
          title: "Login Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          navigate("/");
        });
      })
      .catch((error) => console.error(error.Message));
  };

  return (
    <div className="mt-5">
      <button
        className="btn btn-outline w-full gap-5 items-center justify-center"
        onClick={handelGoogleSignIn}
      >
        <FcGoogle className="text-3xl"></FcGoogle>
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
