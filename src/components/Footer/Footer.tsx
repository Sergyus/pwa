import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#e6e6e6',
    padding: theme.spacing(4),
  },
}));

export default function Footer(): JSX.Element {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  );
}
