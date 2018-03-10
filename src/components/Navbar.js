import React, { Component } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoCompleteFilters from './AutoCompleteFilters'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 750
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <AutoCompleteFilters getSearchResults={this.props.getSearchResults}/>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Giphy Search!" />
            <ToolbarSeparator />
            {isMobile ?
              <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Trending" />
                <MenuItem primaryText="Random" />
              </IconMenu> :
              <div>
                <RaisedButton label="Trending" primary={true} />
                <RaisedButton label="Random" primary={true} />
              </div>
            }
              </ToolbarGroup>
        </Toolbar>
      </MuiThemeProvider>
    )
  }
}



export default Navbar
