import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrder } from '../../../actions/orderActions';
import OrderContainer from '../../../containers/OrderContainer';
import AdminBox from '../../../containers/AdminBox';
import OrderBooks from './OrderBooks';
import OrderUser from './OrderUser';
import OrderPayment from './OrderPayment';
import history from '../../../config/history';

const Order = ({ books, order, getOrder, match, user }) => {
  useEffect(() => getOrder(match.params.id), [getOrder, match.params.id]);

  const userTable = () => {
    return (
      <AdminBox table={true} tablePadding="smallMargin orderUserTable">
        { order ? <OrderUser order={order} /> : null }
      </AdminBox>
    );
  }

  const paymentTable = () => {
    return (
      <AdminBox table={true} tablePadding="orderPaymentTable">
        { order ? <OrderPayment order={order} /> : null }
      </AdminBox>
    );
  }

  if(!user) {
    history.push('/');
    return <></>;

  } else {
    return (
      <>
        <OrderContainer 
          title={`Order${order ? ' #' + order.invoice_id.toUpperCase() : ''}`} 
          headerTitle={`Order${order ? ' #' + order.invoice_id.toUpperCase() : ''}`}
          tablePadding="small smallMargin orderItemsTable"
          userTable={userTable()}
          paymentTable={paymentTable()}
        >
          <OrderBooks books={books} />
        </OrderContainer>
      </>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    books: Object.values(state.orderBooks),
    order: state.orders[ownProps.match.params.id],
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { getOrder })(Order);