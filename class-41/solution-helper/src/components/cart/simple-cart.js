import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { When } from 'react-if';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { removeFromCart } from '../../store/cart';

import './simplecart.scss';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "340px",
    top: "5em",
    flexShrink: 0,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  remove: {
    "cursor": "pointer",
    color: "#eee",
    width: "15px",
    height: "15px",
    background: "#800",
    lineHeight: "13px",
    borderRadius: "50%",
    padding: "0 4px",
    fontSize: "15px",
  }

}));


const SimpleCart = ({ removeFromCart, cart }) => {

  const classes = useStyles();

  return (

    <When condition={cart.items.length >= 1}>
      <div className="simple-cart">
        <ul>
          {cart.items.map(item =>
            <li key={item.name} className={classes.item}>
              <Link component={RouterLink} to={`/product/${item._id}`}>{item.name}</Link>
              <span className={classes.remove} onClick={() => removeFromCart(item)}>x</span>
            </li>
          )}
        </ul>
        <div className="footer"></div>
      </div>
    </When>


  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = ({ removeFromCart });

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
