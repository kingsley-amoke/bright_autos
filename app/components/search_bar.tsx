"use client";

import React from "react";
import SearchIcon from "../icons/search_icon";

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md lg:max-w-2xl">
      <div className="relative flex-1">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search by make, model or keyword..."
          className="border border-gray-300 rounded-full pl-12 px-4 py-2 w-full bg-white focus:outline-none focus:ring-none focus:ring-orange-500 focus:border-orange-500 text-gray-700 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute right-0 inset-y-0 my-2 mr-4 px-2 text-sm text-white bg-orange-500 border border-orange-600 rounded-xl hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
