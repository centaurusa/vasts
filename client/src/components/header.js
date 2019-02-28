import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import VastFormDialog from './vast-form-dialog'; 

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: 40,
  },
  inputInput: {
    marginLeft: 300,
    marginRight: 20,
    color: '#fff',
  }
};



class Header extends Component {

  state = {
    vastId: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  fetchVast = () => {
    this.props.handleFetchVast(this.state.vastId);
    this.setState({ vastId: ''});
  }

  render() {
    const { classes, title, handleCreateVast, createVastResult } = this.props;
    const { vastId } = this.state;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h5" className={classes.title} color="inherit">
                { title }
              </Typography>
              <VastFormDialog handleCreateVast={handleCreateVast} key={createVastResult} />
              <InputBase
                    placeholder="Search Vast by video id"
                    value={vastId}
                    onChange={this.handleChange}
                    name="vastId"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                />
                <Button disabled={!vastId} onClick={this.fetchVast} variant="contained" color="primary">Search</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
  }

}

Header.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
