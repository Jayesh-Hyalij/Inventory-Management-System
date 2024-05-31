import React from 'react';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';

const CustomDropdown = ({ onEdit, onView, onDelete, order, readOnly }) => {
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle variant="secondary" id="dropdown-basic">
        Actions
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu>
        <BootstrapDropdown.Item onClick={() => onEdit(order)} disabled={readOnly}>Edit</BootstrapDropdown.Item>
        {/* <BootstrapDropdown.Item onClick={() => onView(order)}>View</BootstrapDropdown.Item> */}
        <BootstrapDropdown.Item onClick={() => onDelete(order)}>Delete</BootstrapDropdown.Item>
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
};

export default CustomDropdown;
