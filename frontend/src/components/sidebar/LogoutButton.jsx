import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <div className="flex items-center" onClick={logout}>
          <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
          <h1 className="ml-2 cursor-pointer">Logout</h1>
        </div>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
