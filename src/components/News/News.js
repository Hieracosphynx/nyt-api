import { useState, useEffect, useCallback } from 'react';
import useHttp from '../../hooks/use-http';
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
  const { loading, error, news, searchHttp: fetchHttp } = useHttp();
  const { search, setSearch } = useState('');

  const onSearchHandler = (query) => {
    setSearch(query);
  };

  const fetchNews = useCallback(() => {
    fetchHttp('virus')
      .then(console.log(news)
      )
      .catch((e) => {
        console.log(e);
      });
  }, [search]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <Container className={classes.root}>
      <p>df</p>
    </Container>
  );
};

export default News;
