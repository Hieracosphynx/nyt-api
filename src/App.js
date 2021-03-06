import React from 'react';
import SearchProvider from './search/SearchProvider';
import News from './components/News/News';
import Search from './components/Search/Search';

const App = (props) => {
  return (
    <SearchProvider>
      <Search />
      <News />
    </SearchProvider>
  );
};

export default App;
