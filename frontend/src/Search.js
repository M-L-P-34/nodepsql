import React from 'react';

const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <h2>Search Component</h2>
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
