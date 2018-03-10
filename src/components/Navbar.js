import React, { Component } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoCompleteFilters from './AutoCompleteFilters'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <AutoCompleteFilters getSearchResults={this.props.getSearchResults}/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Giphy Search!" />
            {/* <FontIcon className="muidocs-icon-custom-sort" /> */}
            <ToolbarSeparator />
            <RaisedButton label="Trending" primary={true} />
            <RaisedButton label="Random" primary={true} />
            {/* <IconMenu
              iconButtonElement={
              <IconButton touch={true}>
              <NavigationExpandMoreIcon />
              </IconButton>
              }
              >
              <MenuItem primaryText="Download" />
              <MenuItem primaryText="More Info" />
            </IconMenu> */}
          </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    )
  }
}



export default Navbar
