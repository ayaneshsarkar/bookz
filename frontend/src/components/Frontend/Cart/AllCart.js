import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarts, deleteCart, getCartTotal, clearCart } from '../../../actions/cartActions';
import { localizeInt } from '../../../helpers';
import Sprite from '../../../assets/svg/feather-sprite.svg';
import Cart from './Cart';
import ConfirmAddress from '../Auth/ConfirmAddress';
import OrderDialog from '../Order/OrderDialog';

class AllCart extends Component {

  state = {
    carts: [],
    total: null,

    address: false,
    addressDialogOpen: false,
    checkoutDialogState: false,
    checkoutDialogOpen: false
  }

  async componentDidMount() {
    if(this.props.user.address) {
      this.setState({ address: true });
    }

    await this.props.getCarts();
    await this.props.getCartTotal();

    this.setState({
      carts: this.props.carts,
      total: this.props.total
    });
  }

  componentDidUpdate() {
    if(this.state.carts !== this.props.carts) {
      this.setState({
        carts: this.props.carts,
        total: this.props.total
      });
    }

    if(this.props.user && this.props.user.address && !this.state.address) {
      this.setState({ address: true });
    }
  }

  deleteSingleCart = async (bookId) => {
    await this.props.deleteCart(bookId);
  }

  deleteAllCart = async () => {
    await this.props.clearCart();
  }

  closeAddressDialog = async () => {
    this.setState({ addressDialogOpen: false });
  }

  checkUserAddress = () => {
    if(!this.state.address) {
      this.setState({ addressDialogOpen: true });
    } else {
      this.setState({ checkoutDialogOpen: true, checkoutDialogState: true });
    }
  }

  setCheckoutDialog = () => {
    this.setState({ 
      checkoutDialogState: false,
      checkoutDialogOpen: false
    });
  }

  render() {
    return (
      <div className="allcart">
        <div className="breadcrumb">
          <h3 className="cart__title">Shopping Cart</h3>
          {(this.state.carts.length) ? <button 
            className="cart__confirm whiteSelection"
            onClick={this.checkUserAddress}
          >
            Place Order
          </button> : ''}
        </div>

        {!this.state.address && <ConfirmAddress 
          open={this.state.addressDialogOpen} 
          closeAddress={this.closeAddressDialog} 
          user={this.props.user}
        />}

        <table className="cartTableContainer">
          <tbody>
            {(this.state.carts !== []) && this.state.carts.map((cart, i) => {
              return (
                <Cart 
                  key={cart.cartitemid} 
                  cart={cart} 
                  deleteSingleCart={this.deleteSingleCart} 
                />
              )
            })}

            {(this.state.carts !== [] && this.state.total > 0) && <tr className="last">
              <td></td>
              <td></td>
              <td className="cart-lgmd">
                <div className="cart__content--price whiteSelection">
                  { localizeInt((this.state.total), 'INR') }
                </div>
              </td>
              <td className="cart-lgmd">
                <div className="cart-cross last" onClick={this.deleteAllCart}>
                  <svg>
                    <use xlinkHref={`${Sprite}#x`}></use>
                  </svg>
                </div>
              </td>
            </tr>
            }

          </tbody>
        </table>

        {(this.state.carts.length) ? <OrderDialog 
          open={this.state.checkoutDialogOpen} 
          setClose={this.setCheckoutDialog}
          total={this.state.total}
          user={this.props.user}
        /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    carts: Object.values(state.cart).sort().reverse(),
    total: state.cartTotal.total
  }
}

export default connect(mapStateToProps, 
  { getCarts, deleteCart, getCartTotal, clearCart }
)(AllCart);