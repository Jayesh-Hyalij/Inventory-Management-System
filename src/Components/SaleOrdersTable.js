import React from 'react';
import CustomDropdown from './Buttons/Dropdown';

const SaleOrdersTable = ({ orders, onEdit, onView, onDelete, readOnly }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Price (₹)</th>
          <th>Last Modified</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{order.price}</td>
            <td>{order.lastModified ? new Date(order.lastModified).toLocaleString() : 'N/A'}</td>
            <td>
              <CustomDropdown
                onEdit={onEdit}
                onView={onView}
                onDelete={() => onDelete(order.id)}
                order={order}
                readOnly={readOnly}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SaleOrdersTable;
