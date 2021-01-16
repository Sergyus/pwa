import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1565c0',
    },
    secondary: { main: '#ee2828' },
    error: { main: '#810404' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});
