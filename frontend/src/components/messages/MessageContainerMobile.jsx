import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainerMobile = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={`flex flex-col h-svh overflow-hidden w-svw p-2`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-blue-500 px-4 py-2 mb-2">
            <span className="label-text text-white">To: </span>
            <span className="text-white font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainerMobile;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome to ConversaSync</p>
        <p>👋 {authUser.fullName} 💬</p>
        <p>Select a chat to start messaging</p>
        <img
          src="./images/logo.png"
          className=" w-48 m-5"
          alt="conversasync logo"
        ></img>
      </div>
    </div>
  );
};