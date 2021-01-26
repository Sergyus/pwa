import React from 'react';
import Title from '../components/Title';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Button, ButtonGroup, Theme } from '@material-ui/core';
import CheckboxLabels from '../components/UI/CheckboxLabels';
import FloatingActionButtons from '../components/UI/FloatingActionButtons';
import SwitchLabels from '../components/UI/SwitchLabels';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function Ui(): JSX.Element {
  const classes = useStyles();
  return (
    <div>
      <Title title="UI" />

      <div className={classes.root}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>

      <br />

      <div className={classes.root}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>three</Button>
          <Button>Four</Button>
        </ButtonGroup>
        <ButtonGroup disableElevation variant="contained" color="secondary">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>three</Button>
          <Button>Four</Button>
        </ButtonGroup>
      </div>

      <br />

      <div className={classes.root}>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>

      <div className={classes.root}>
        <CheckboxLabels />
      </div>

      <div className={classes.root}>
        <FloatingActionButtons />
      </div>

      <div className={classes.root}>
        <SwitchLabels />
      </div>
    </div>
  );
}
