import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal'

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
    let columns = Math.min(Math.round(this.props.width / 200),this.props.results.length)
    return (
      <div className="gridListSection">
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList
            cellHeight={"auto"}
            cols={columns}
            className="gridList"
          >
            {this.props.results.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                onClick={() => this.reverseModal(tile)}
              >
                <img src={tile.images.downsized.url} alt={tile.title}/>
              </GridTile>
            ))}
          </GridList>
          <Modal gif={this.state.selectedGIF} reverseModal={this.reverseModal} modalOpen={this.state.modalOpen}/>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Grid;
