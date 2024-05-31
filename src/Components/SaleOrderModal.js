import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderModal = ({ show, onClose, order, onSave, readOnly }) => {
  const [customerName, setCustomerName] = useState(order?.customerName || '');
  const [price, setPrice] = useState(order?.price || 0);
  const [saveInCompleteOrder, setSaveInCompleteOrder] = useState(order?.isComplete || false);

  const handleSaveOrder = () => {
    const updatedOrder = {
      ...order,
      customerName,
      price,
      lastModified: new Date().toLocaleString(), // Format: YYYY-MM-DD HH:mm
      isComplete: saveInCompleteOrder
    };
    onSave(updatedOrder);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{order ? 'Edit Order' : 'Add Order'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SaleOrderForm
          order={order}
          customerName={customerName}
          setCustomerName={setCustomerName}
          price={price}
          setPrice={setPrice}
          readOnly={readOnly}
          saveInCompleteOrder={saveInCompleteOrder}
          setSaveInCompleteOrder={setSaveInCompleteOrder}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {!readOnly && (
          <Button variant="primary" onClick={handleSaveOrder}>
            Save Changes
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SaleOrderModal;