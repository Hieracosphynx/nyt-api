import { useState } from 'react';
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
  return (
    <Container className={classes.root}>
      <p>df</p>
    </Container>
  );
};

export default News;
