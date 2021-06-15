import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { category, getCategories } from '../../store/categories.js';

const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {

  const classes = useStyles();

  const { getCategories, category, categories, activeCategory } = props;

  const loadCategories = useCallback(getCategories, [getCategories])

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className={classes.categories}>
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {categories.map(cat =>
          <Button
            key={cat._id}
            color={cat.name === activeCategory ? null : 'primary'}
            onClick={() => category(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories.categoryList,
  activeCategory: state.categories.activeCategory
});

const mapDispatchToProps = { category, getCategories };

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
