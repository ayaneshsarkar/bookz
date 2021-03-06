import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../../actions/orderActions';
import OrderContainer from '../../../containers/OrderContainer';
import OrderTable from './OrderTable';
import history from '../../../config/history';

const Orders = ({ orders, user, getOrders }) => {
  useEffect(() => getOrders(), [ getOrders ]);

  if(!user) {
    history.push('/');
    return <></>;
    
  } else {
    return (
      <OrderContainer title="Bookz — All Orders" headerTitle="All Orders" tablePadding="allOrdersTable">
        <OrderTable orders={orders} user={user} />
      </OrderContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orders: Object.values(state.orders)
  }
}

export default connect(mapStateToProps, { getOrders })(Orders);