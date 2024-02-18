import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <div className="flex justify-center pb-3">
        <img
          src="./images/logo2.png"
          className=" w-44"
          alt="conversasync logo"
        ></img>
      </div>
      <SearchInput />
      <div className="divider px-3 divider-accent"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
