import { useState, useContext, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import SearchContext from '../../search/search-context';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: 'yellow',
  },
  grid: {
    direction: 'row',
    spacing: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const News = (props) => {
  const classes = useStyles();
  const searchCtx = useContext(SearchContext);
  const { loading, error, searchHttp: fetchNews } = useHttp();
  const { search, setSearch } = useState('');

  const onSearchHandler = (query) => {
    setSearch(query);
  };

  useEffect(() => {
    const transformNews = (newsObj) => {
      console.log(newsObj);
    };
    fetchNews(search, transformNews);
  }, [fetchNews, search]);

  return (
    <Container className={classes.root}>
      <p>df</p>
    </Container>
  );
};

export default News;
