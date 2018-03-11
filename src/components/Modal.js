import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from './muiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
 const Modal = ({...props}) => {
  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={props.reverseModal}
    />
  ];
  return (
    <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dialog
          title={props.gif.title}
          actions={actions}
          modal={true}
          open={props.modalOpen}
        >
          {props.gif.images && <img src={props.gif.images.original.url} alt={props.gif.title}/>}
          <br/>
          <a className="link" href={props.gif.url} target="_blank" rel="noopener noreferrer">LINK</a>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
}

export default Modal;
