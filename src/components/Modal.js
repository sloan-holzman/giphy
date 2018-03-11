import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
 class Modal extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.reverseModal}
      />
    ];
    console.log(this.props.gif)
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title={this.props.gif.title}
            actions={actions}
            modal={true}
            open={this.props.modalOpen}
          >
            {this.props.gif.images && <img src={this.props.gif.images.original.url} alt={this.props.gif.title}/>}
            <br/>
            <a className="link" href={this.props.gif.url} target="_blank">LINK</a>
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Modal;
