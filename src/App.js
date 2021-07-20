import React from 'react';
import News from './components/News/News';
import Search from './components/Search/Search';

const App = () => {
  return (
    <React.Fragment>
      <Search />
      <News />
    </React.Fragment>
  );
};

export default App;
