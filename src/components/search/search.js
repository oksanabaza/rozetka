import React, { useState, useEffect } from 'react';
import './search.css';
const Search = () => {
  const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('Кофемашина');


  const getSearch = e => {
    e.preventDefault();
    // setQuery(search)

  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Я ищу..." className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Найти</button>
      </form>
    </div>
  )
};

export default Search;