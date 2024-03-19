import React from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <form
   className="flex flex-col gap-4 p-2"
    >
        <div className="text-4xl font-bold mx-auto">Busque su <br /> cancion favorita:</div>
      <div className="flex mx-auto items-center  gap-2 p-1 rounded-md bg-zinc-800  w-full max-w-[80%]">
        <CgSearch className="text-3xl" />
        <input type="text" className="grow bg-transparent outline-none" />
      </div>
    </form>
  );
};

export default Search;
