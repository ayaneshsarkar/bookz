import React from 'react';

const OrderUser = ({ order }) => {
  return (
    <>
    {/* Name & E-Mail */}
      <thead>
        <tr>
          <th className="d-none table-sm">User</th>
          <th className="lgmd">Name</th>
          <th className="lgmd">E-Mail</th>
          <th className="lgmd"></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="d-none table-sm">
            <div className="limited m-1">{ order.first_name + ' ' + order.last_name }</div>
            <div className="limited m-1">{ order.email }</div>
            <div className="limited m-1 info">City: <span>{ order.city }</span></div>
            <div className="limited m-1 info">State: <span>{ order.state }</span></div>
            <div className="limited m-1 info">Country: <span>{ order.country }</span></div>
            <div style={{ whiteSpace: 'pre-line' }}>{ order.address }</div>
          </td>
          <td className="lgmd">{ order.first_name + ' ' + order.last_name }</td>
          <td className="lgmd">{ order.email }</td>
        </tr>
      </tbody>

      {/* City, State, Country */}
      <thead className="lgmd">
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>

      <tbody className="lgmd">
        <tr>
          <td>{ order.city }</td>
          <td>{ order.state }</td>
          <td>{ order.country }</td>
        </tr>
      </tbody>

      {/* Address */}
      <thead className="lgmd">
        <tr>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody className="lgmd">
        <tr>
          <td style={{ whiteSpace: 'pre-line' }}>{ order.address }</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </>
  );
}

export default OrderUser;