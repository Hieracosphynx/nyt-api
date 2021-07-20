import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
// import classes from './NewSearch.module.css';

const useStyles = makeStyles({
  button: {
    marginLeft: '20px',
  },
  textField: {
    width: '60%',
  },
});

const NewSearch = (props) => {
  const classes = useStyles();
  //   const searchValue = useRef();
  const [search, setSearch] = useState('');

  const onSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        color='primary'
        className={classes.textField}
        id='search'
        type='text'
        onChange={onSearchHandler}
      />
      <Button
        type='submit'
        className={classes.button}
        variant='contained'
        color='primary'
      >
        Search
      </Button>
    </form>
  );
};

export default NewSearch;
