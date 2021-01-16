import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    'color': green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(): JSX.Element {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel
        disabled
        control={<Checkbox checked name="checkedE" />}
        label="Disabled"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label="Custom color"
      />
    </FormGroup>
  );
}
