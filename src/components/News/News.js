import { useState, useContext, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import SearchContext from '../../search/search-context';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '50px',
    width: '100%',
    margin: 0,
    flexGrow: 1,
  },
  paper: {
    minHeight: '500px',
    height: 'auto',
    width: '300px',
    padding: '15px',
  },
  image: {
    width: '300px',
    height: '250px',
  },
  headings: {
    fonSize: '14px',
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
          <Link href={data.web_url}>
            <Paper variant='outlined' className={classes.paper}>
              <img
                className={classes.image}
                src={data.multimedia}
                alt='No preview available'
              />
              <Typography variant='h5' className={classes.headings}>
                {data.abstract}
              </Typography>
              <p>{data.lead_paragraph}</p>
            </Paper>
          </Link>
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
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.root}
          justifyContent='center'
          spacing={8}
        >
          {content}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default News;
