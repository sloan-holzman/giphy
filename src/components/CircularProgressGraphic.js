import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const CircularProgressGraphic = () => (
  <div>
    {/* <CircularProgress />
    <CircularProgress size={60} thickness={7} /> */}
    <MuiThemeProvider muiTheme={muiTheme}>

      <CircularProgress size={80} thickness={5} />
    </MuiThemeProvider>
  </div>
);

export default CircularProgressGraphic;
