import NewSearch from './NewSearch';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    borderRadius: '5px',
    alignItems: 'center',
    textAlign: 'center',
    width: '70%',
    padding: '12px',
  },
});

const Search = (props) => {
  const classes = useStyles();

  return (
    <Container color='primary' className={classes.root}>
      <NewSearch />
    </Container>
  );
};

export default Search;
