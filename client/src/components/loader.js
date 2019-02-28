import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 100000
  },
});

const CircularIndeterminate = (props) => {
  const { classes } = props;
  return (
    <Fragment>
      <CircularProgress className={classes.progress} color="secondary" />
    </Fragment>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
