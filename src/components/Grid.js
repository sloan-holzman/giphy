import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const Grid = ({...props}) => (
  <div style={styles.root}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <GridList
        // cellHeight={180}
        style={styles.gridList}
        cols={10}
      >
        {props.results.map((tile) => (
          <GridTile
            key={tile.id}
            title={tile.title}
            // subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.images.original.url} />
          </GridTile>
        ))}
      </GridList>
    </MuiThemeProvider>
  </div>
);

export default Grid;
