import React from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoCompleteFilters from './AutoCompleteFilters'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';

const Navbar = ({...props}) => {
  let isMobile = props.width <= 750
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <AutoCompleteFilters fetchSearchResults={props.fetchSearchResults}/>
        </ToolbarGroup>
        <ToolbarGroup>
          {!isMobile && <ToolbarTitle text="Giphy Search!" />}
          <ToolbarSeparator />
          {isMobile ?
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="Trending" onClick={props.fetchTrendingResults}/>
              <MenuItem primaryText="Random" onClick={props.fetchRandomResult}/>
            </IconMenu> :
            <div>
              <RaisedButton label="Trending" primary={true} onClick={props.fetchTrendingResults}/>
              <RaisedButton label="Random" primary={true} onClick={props.fetchRandomResult}/>
            </div>
          }
        </ToolbarGroup>
      </Toolbar>
    </MuiThemeProvider>
  )
}

export default Navbar
