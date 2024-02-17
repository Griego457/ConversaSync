import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSearchUser = () => {
  const [loading, setLoading] = useState(false);
  const { conversation, setConversation } = useConversation();

  const searchUserByName = async (name) => {
    setLoading(true);
    try {
      const res = await fetch("/api/users/searchByName", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setConversation(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, searchUserByName };
};

export default useSearchUser;
