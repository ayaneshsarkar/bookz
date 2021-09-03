import React from 'react';
import Head from './Helmet';
import AdminUX from './AdminUX';
import Header from '../components/Admin/Header';
import AdminBox from './AdminBox';

const OrderContainer = props => {
  return (
    <>
      <Head title={props.title} />
      <AdminUX path="">
        <Header title={props.headerTitle} search={false} add={false} addLink={false} 
          titleClass="order"
          titleBoxClass=" order"
        />

        <AdminBox table={true} tablePadding={props.tablePadding || null}>
          { props.children }
        </AdminBox>

        { props.userTable ? props.userTable : null }

        { props.paymentTable ? props.paymentTable : null }
      </AdminUX>
    </>
  );
}

export default OrderContainer;