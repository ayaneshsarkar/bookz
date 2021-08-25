import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrder } from '../../../actions/orderActions';
import OrderContainer from '../../../containers/OrderContainer';
import OrderBooks from './OrderBooks';

const Order = ({ books, getOrder, match }) => {
  useEffect(() => getOrder(match.params.id), [getOrder, match.params.id])

  return (
    <>
      <OrderContainer title="Order" headerTitle="Order" tablePadding="small smallMargin">
        <OrderBooks books={books} />
      </OrderContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    books: Object.values(state.orderBooks),
  }
}

export default connect(mapStateToProps, { getOrder })(Order);