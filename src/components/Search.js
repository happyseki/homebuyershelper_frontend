import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search houses"
        onChange={props.updateSearchInput}
      />
    </div>
  );
}

export default Search;
