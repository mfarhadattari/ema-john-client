import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-5">
      <button className="btn btn-outline w-full gap-5 items-center justify-center">
        <FcGoogle className="text-3xl"></FcGoogle>
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
