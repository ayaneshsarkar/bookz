import React from 'react';
import Sidebar from '../components/Admin/Sidebar';

const AdminUX = props => {
  return(
    <div className="adminMargin">
      <main className="full-wrapper main" id="main">
        <Sidebar path={props.path || false} />
        { props.children }
      </main>
    </div>
  );
}

export default AdminUX;