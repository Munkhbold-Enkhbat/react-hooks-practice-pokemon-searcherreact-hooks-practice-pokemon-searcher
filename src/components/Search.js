import React from "react";

function Search({ handleSearch }) {
  return (
    <form className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </form>
  );
}

export default Search;
