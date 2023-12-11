import React, {useState} from "react";

function Search({onSearch}) {

  const [searchedItem, setSearchedItem]= useState("")

  function handleChange(e) { 
    setSearchedItem(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchedItem}
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
