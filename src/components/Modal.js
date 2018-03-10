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
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.props.modalOpen}
          >
            Only actions can close this dialog.
            {this.props.gif.images && <img src={this.props.gif.images.original.url} alt={this.props.gif.title}/>}
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Modal;
