import React from 'react';

const OrderUser = ({ order }) => {
  return (
    <>
    {/* Name & E-Mail */}
      <thead>
        <tr>
          <th>Name</th>
          <th>E-Mail</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{ order.first_name + ' ' + order.last_name }</td>
          <td>{ order.email }</td>
          <td></td>
        </tr>
      </tbody>

      {/* City, State, Country */}
      <thead>
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{ order.city }</td>
          <td>{ order.state }</td>
          <td>{ order.country }</td>
        </tr>
      </tbody>

      {/* Address */}
      <thead>
        <tr>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
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