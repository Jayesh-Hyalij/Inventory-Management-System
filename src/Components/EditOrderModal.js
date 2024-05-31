// File path: src/SaleOrderModal.js

import React from 'react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ show, onClose, order, onSave, readOnly }) => {
  if (!show) {
    return null;
  }

  const [customerName, setCustomerName] = useState(order?.customerName || '');
  const [price, setPrice] = useState(order?.price || '');

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <SaleOrderForm 
          order={order} 
          customerName={customerName}
          setCustomerName={setCustomerName}
          price={price}
          setPrice={setPrice}
          readOnly={readOnly}
          onSave={onSave}
        />
      </div>
    </div>
  );
};

export default SaleOrderModal;
