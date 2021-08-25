import React from 'react';
import AdminUX from '../../../containers/AdminUX';
import Header from '../Header';
import Head from '../../../containers/Helmet';

const Orders = () => {
  return (
    <>
      <Head title="Orders" />
      <AdminUX>
        <Header title="All Orders" />
        
      </AdminUX>
    </>
  );
}

export default Orders;