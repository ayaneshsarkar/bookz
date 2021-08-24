import React, { Fragment } from 'react';
import Head from './Helmet';
import AdminUX from './AdminUX';
import AdminBox from './AdminBox';
import Header from '../components/Admin/Header';

const BookContainer = props => {
  return (
    <Fragment>
      <Head title={props.title} />
      <AdminUX path={props.path || ''}>
        <Header title={props.headerTitle} search={props.search || false}
          add={props.add || false} addLink={props.addLink || false}
        />

        <AdminBox table={ props.table || false } 
        tablePadding={props.tablePadding || false}>
          { props.children }
        </AdminBox>
      </AdminUX>
    </Fragment>
  );
}

export default BookContainer;