import React from 'react';

const Search = ({ value, onSearch }) => {
  return (
    <div className="p-b-1">
      <input
        onChange={e => onSearch(e.target.value)}
        value={value}
        placeholder="Søg brugere"
        className="form-control"
        type="search"
      />
    </div>
  );
};

export default Search;
