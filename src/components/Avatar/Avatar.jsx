import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Avatar = () => {
  /* ------------ context date ---------- */
  const { user, logOutUser } = useContext(AuthContext);

  /* ------------ log out handler -------- */
  const handelLogOut = () => {
    Swal.fire({
      title: "Want Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire({
              title: "Successfully Log Out!",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "OK",
            });
          })
          .catch((error) => console.error());
      }
    });
  };

  return (
    <div className="flex items-center gap-5">
      <button className="btn btn-outline btn-warning" onClick={handelLogOut}>
        Log Out
      </button>
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
