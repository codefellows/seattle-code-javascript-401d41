import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { addToCart } from '../../store/cart.js';
import { getProducts } from '../../store/products.js';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = props => {

  const classes = useStyles();

  const { activeCategory, products, addToCart, getProducts } = props;

  // re-fetch the product list whenever the activeCategory changes
  useEffect(() => {
    getProducts(activeCategory);
  }, [activeCategory, getProducts]);

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`https://source.unsplash.com/random?${product.name}`}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => addToCart(product)}>
                    Add To Cart
                  </Button>
                  <Button size="small" color="primary" component={Link} to={`/product/${product._id}`}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );

}

const mapStateToProps = state => ({
  products: state.products.productList,
  activeCategory: state.categories.activeCategory
});

const mapDispatchToProps = { addToCart, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
