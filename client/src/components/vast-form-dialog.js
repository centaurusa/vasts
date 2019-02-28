import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import VastForm from './vast-form';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Axios from 'axios';

export default class VastFormDialog extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = formValue => {
    this.props.handleCreateVast(formValue);
  }

  render() {
    return (
      <Fragment>
        <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>Create Vast</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth >
          <DialogTitle id="form-dialog-title">Create Vast</DialogTitle>
          <DialogContent>
            <VastForm onSubmit={this.handleSubmit}/>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

VastFormDialog.propTypes = {
  handleCreateVast: PropTypes.func.isRequired,
};
