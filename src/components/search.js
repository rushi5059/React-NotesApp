import React from "react";
import { MdSearch } from "react-icons/md";
const Search = () => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input type="text" placeholder="Type to Search"></input>
    </div>
  );
};
export default Search;
