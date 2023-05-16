import { FaUser } from "react-icons/fa";

const Avatar = () => {
  const user = true;

  return (
    <div className="flex items-center gap-5">
      <button className="btn btn-outline btn-warning">Log Out</button>
      <div className="avatar">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {user.photoURL ? (
            <img src={user.photoURL} />
          ) : (
            <p className="text-4xl flex justify-center mt-1">
              <FaUser></FaUser>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
