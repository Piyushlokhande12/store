import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser,"in Logout")
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error: " + error); 
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-blue-900 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;