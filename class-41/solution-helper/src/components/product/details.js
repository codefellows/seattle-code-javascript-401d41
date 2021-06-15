import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { When } from 'react-if';

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

import SimpleCart from '../cart/simple-cart';
import { addToCart } from '../../store/cart.js';
import { getProduct } from '../../store/products.js';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  productName: {
    textTransform: 'uppercase'
  },
  layout: {
    boxSizing: "border-box",
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  data: {
    padding: theme.spacing(3),
  },
  related: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  relatedItem: {
    padding: theme.spacing(2),
  },
  price: {
    textAlign: "right",
    color: theme.secondary,
  },
  buyButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  more: {
    width: "100%"
  },
  image: {
    maxWidth: "100%"
  }
}));

const Product = ({ id, getProduct, addToCart, activeProduct }) => {

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function addItemToCart(product) {
    addToCart(product);
  }

  const loadProduct = useCallback(() => {
    getProduct(id);
  }, [getProduct, id]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  return (

    <div className={classes.heroContent}>
      <SimpleCart />
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" className={classes.productName} align="center" color="textPrimary" gutterBottom>
          {activeProduct.name}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {activeProduct.description}
        </Typography>

        <div className={classes.layout}>
          <Paper>
            <Grid container className={classes.data}>
              <Grid item xs={12}>
                <img alt={activeProduct.name} className={classes.image} src={`https://source.unsplash.com/random?${activeProduct.name}`} />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="textSecondary" paragraph>
                  In Stock: <strong>{activeProduct.inStock}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.price}>
                <Typography variant="h5" paragraph>
                  ${activeProduct.price}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          <When condition={activeProduct.inStock >= 1}>
            <Button className={classes.buyButton} variant="contained" color="primary" onClick={() => addItemToCart(activeProduct)}>Buy</Button>
          </When>

          <Grid container className={classes.related}>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom={true}>Related Items</Typography>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.relatedItem}>Suggestion 1</Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.relatedItem}>Suggestion 2</Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper className={classes.relatedItem}>Suggestion 3</Paper>
            </Grid>

          </Grid>

          <Typography variant="h4" gutterBottom={true}>Product Details</Typography>
          <ExpansionPanel className={classes.more} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Specifications</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Products Specs.
          </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>


          <ExpansionPanel className={classes.more} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>User Reviews</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                A list of reviews ...
            </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </div>

      </Container>
    </div >


  );

}

const mapStateToProps = (state, originalProps) => ({
  activeProduct: state.products.activeProduct,
  id: originalProps.match.params.id
});

const mapDispatchToProps = { getProduct, addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Product);
