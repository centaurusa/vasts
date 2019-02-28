import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { VAST_POSITIONS } from '../enums/vast-positions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class VastForm extends React.Component {

  state = {
    vastURL: '',
    position: 'bottom_right',
    hideUI: false
  };

  handleChange = (event, bool = false) => {
    if (bool) {
      this.setState({ [event.target.name]: event.target.checked });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { vastURL, position, hideUI } = this.state;
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl fullWidth>
            <TextField
              autoFocus
              margin="dense"
              id="vastUrl"
              label="Vast URL"
              type="text"
              name="vastURL"
              value={vastURL}
              onChange={(e) => this.handleChange(e)}
              required
            />
        </FormControl>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Vast Position</InputLabel>
          <Select
            value={position}
            onChange={(e) => this.handleChange(e)}
            inputProps={{
              name: 'position',
              id: 'vast-position',
            }}
          >
            {VAST_POSITIONS.map(pos => {
                let label = pos.replace("_", " ");
                return <MenuItem key={pos} value={pos}>{label}</MenuItem>
            })}
          </Select>
        </FormControl>
        <FormControlLabel control={
            <Checkbox
                name="hideUI"
                checked={hideUI}
                onChange={(e) => this.handleChange(e, true)}
                value="hideUI"
              />
            }
          label="Hide UI" />
        <Button variant="contained" color="primary" fullWidth onClick={this.handleSubmit} >
              Submit
        </Button>
      </form>
    );
  }
}

VastForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(VastForm);
