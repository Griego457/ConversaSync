import React, { useState } from "react";
import MessageContainerMobile from "../../components/messages/MessageContainerMobile";
import SearchInput from "../../components/sidebar/SearchInput";
import Conversations from "../../components/sidebar/Conversations";
import LogoutButton from "../../components/sidebar/LogoutButton";
import { GiHamburgerMenu } from "react-icons/gi";

const HomeMobile = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="h-svh first-line:flex items-center justify-center overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          checked={isDrawerOpen}
          onChange={toggleDrawer}
          className="drawer-toggle"
        />
        <div className="drawer-content rounded-lg flex w-full">
          <div className="bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 px-2 py-2 justify-center">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary bg-blue-500 drawer-button"
            >
              <GiHamburgerMenu />
            </label>
          </div>

          <MessageContainerMobile />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="border-r border-slate-500 bg-black p-4 flex flex-col h-svh">
            <div className="flex justify-center pb-3">
              <img
                src="./images/logo2.png"
                className=" w-44"
                alt="conversasync logo"
              ></img>
            </div>
            <SearchInput />
            <div className="divider px-3 divider-accent"></div>
            <Conversations toggleDrawer={toggleDrawer} />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;
