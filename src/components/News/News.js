import { useState, useContext, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import SearchContext from '../../search/search-context';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import AlertTitle from '@material-ui/lab/AlertTitle';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: 0,
    flexGrow: 1,
    overflowY: 'hidden',
  },
  paper: {
    height: '500px',
    width: '300px',
    padding: '15px',
  },
});

const News = (props) => {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const searchCtx = useContext(SearchContext);
  const { loading, error, searchHttp: fetchNews } = useHttp();

  useEffect(() => {
    const transformNews = (newsObj) => {
      setNews(newsObj);
    };

    fetchNews(searchCtx.query, transformNews);
  }, [fetchNews, searchCtx.query]);

  let content = <p>Search something.</p>;

  const listNews = () => {
    content = news.map((data) => {
      return (
        <Grid key={data.id} item>
          <Paper className={classes.paper}>{data.abstract}</Paper>
        </Grid>
      );
    });
  };

  if (loading) {
    content = <CircularProgress />;
  }

  if (!loading && !error) {
    listNews();
  }

  if (error) {
    content = (
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  }

  return (
    <Grid container className={classes.root} spacing={3} xs={12}>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={10}>
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;
