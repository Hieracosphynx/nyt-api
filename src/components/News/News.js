import { useState, useContext, useEffect } from 'react';
import useHttp from '../../hooks/use-http';
import SearchContext from '../../search/search-context';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import AlertTitle from '@material-ui/lab/AlertTitle';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
  },
  card: {
    width: '50px',
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
    content = news.map((item) => {
      return (
        <Card className={classes.card} key={item.id}>
          {item.abstract}
        </Card>
      );
    });
  };

  if (loading) {
    content = <CircularProgress />;
  }

  if (!loading && !error) {
    listNews();
  }

  return (
    <Container className={classes.root}>
      <ul>{content}</ul>
    </Container>
  );
};

export default News;
