import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import { manipulateFirstLetter, localizeInt } from '../../../helpers';
import OrderPayment from './OrderPayment';

class OrderDialog extends Component {
  render() {
    const user = this.props.user;

    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.setClose}
        classes={{ paper: 'br-none' }}
        maxWidth="lg"
      >
        <div className="header__auth order">
          <h2 className="order__title">Grand Total: 
            <span className="order__title--price">
              { manipulateFirstLetter(localizeInt(this.props.total, 'INR'), ' ') }
            </span>
          </h2>

          <div className="order__delivery">
            <h3 className="order__delivery--title">Customer Details: </h3>
            <h4 className="order__delivery--name">
              { `${user.first_name} ${user.last_name}` }
            </h4>

            <p className="order__delivery--content">
              { user.email } <br />
              { user.address } <br />
              { `${user.city}, ${user.state}, ${user.country}` }
            </p>
          </div>

          <OrderPayment />
        </div>
      </Dialog>
    );
  }
}

export default connect(null, null)(OrderDialog);