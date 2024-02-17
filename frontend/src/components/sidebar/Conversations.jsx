import React, { useEffect } from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import useConversation from "../../zustand/useConversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  const { setConversation } = useConversation();

  useEffect(() => {
    return () => setConversation([]);
  }, [setConversation]);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.length !== 0 ? (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={index === conversation.length - 1}
          />
        ))
      ) : (
        <p className="text-center text-gray-200">No user found</p>
      )}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
