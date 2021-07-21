import React from 'react';

const SearchContext = React.createContext({
  query: '',
  searchQuery: (q) => {},
});

export default SearchContext;
