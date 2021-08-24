import React, { Fragment } from 'react';

const AdminBox = props => {
  return (
    <Fragment>
      { !props.table && <section className="adminContainer" id="adminContainer">
        { props.children }
      </section> }
      {  props.table && <table 
      className={`tableContainer ${props.tablePadding || ''}`} 
      id="tableContainer">
        { props.children }
      </table> }
    </Fragment>
  );
}

export default AdminBox;