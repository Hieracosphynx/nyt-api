import React, { useState } from 'react';
import SearchContext from './search-context';

const SearchProvider = (props) => {
  const [query, setQuery] = useState('');

  const searchQuery = (q) => {
    setQuery(q);
  };

  const searchContext = {
    query: query,
    searchQuery: searchQuery,
  };

  return (
    <SearchContext.Provider value={searchContext}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
