import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '95%'
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedGIF: {}
    };
    this.reverseModal = this.reverseModal.bind(this);
  }

  reverseModal = (gif) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      selectedGIF: gif
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList
            cellHeight={"auto"}
            style={styles.gridList}
            cols={5}
          >
            {this.props.results.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                // subtitle={<span>by <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                onClick={() => this.reverseModal(tile)}
              >
                <img src={tile.images.original.url} alt={tile.title}/>
              </GridTile>
            ))}
          </GridList>
          <Modal gif={this.state.selectedGIF} reverseModal={this.reverseModal} modalOpen={this.state.modalOpen}/>
        </MuiThemeProvider>
      </div>
    )
  }
};

export default Grid;
