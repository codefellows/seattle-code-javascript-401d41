import React from 'react';
import { connect } from 'react-redux';

import { When } from 'react-if';

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  categoryName: {
    textTransform: 'uppercase'
  }
}));

const CurrentCategory = ({ activeCategory }) => {

  const classes = useStyles();

  return (
    <When condition={!!activeCategory}>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" className={classes.categoryName} align="center" color="textPrimary" gutterBottom>
            {activeCategory}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Category Description Goes Here
        </Typography>
        </Container>
      </div>
    </When>
  );
}

const mapStateToProps = state => ({
  activeCategory: state.categories.activeCategory
});

export default connect(mapStateToProps)(CurrentCategory);
