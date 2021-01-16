import React, { useEffect } from 'react';
import Title from '../components/Title';
import MediaCard from '../components/UI/MediaCard';
import {
  Backdrop,
  CircularProgress,
  createStyles,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default function Blog(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
    setTimeout(() => setOpen(!open), 1000);
  }, []);

  return (
    <>
      <Title title="Blog" />

      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
          <Grid item xs={4}>
            <MediaCard />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
