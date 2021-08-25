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
        <Header title={props.headerTitle} search={false} add={false} addLink={false} />

        <AdminBox table={true} tablePadding="small">
          { props.children }
        </AdminBox>
      </AdminUX>
    </>
  );
}

export default OrderContainer;