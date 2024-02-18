import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useSearchUser from "../../hooks/useSearchUser";
import { capitalizeName } from "../../utils/capitalizeName";
import useGetConversation from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { loading, searchUserByName } = useSearchUser();
  const { setSelectedConversation } = useConversation();
  const name = capitalizeName(search);
  const searchUser = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search !== "") {
      await searchUserByName(name);
    }
    setSelectedConversation(null);
  };

  return (
    <form className="flex items-center gap-2" onSubmit={searchUser}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        {!loading ? (
          <IoSearchSharp className="w-6 h-6 outline-none" />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </button>
    </form>
  );
};

export default SearchInput;
