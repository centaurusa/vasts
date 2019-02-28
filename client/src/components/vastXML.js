import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    fontSize: '18px',
    cursor: 'initial',
  }
};

const VastCard = ({ content, classes }) => {

  return (
    <Card className={classes.card}>
      <CardContent>
        <textarea readOnly rows="30" cols="200" style={styles.content} defaultValue={content}></textarea>
      </CardContent>
    </Card>
  );
}

VastCard.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

export default withStyles(styles)(VastCard);
