import React from 'react';

const SaleOrderForm = ({ order, customerName, setCustomerName, price, setPrice, readOnly, onSave, saveInCompleteOrder, setSaveInCompleteOrder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ customerName, price, id: order?.id, isComplete: saveInCompleteOrder });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Customer Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          disabled={readOnly}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price (₹)</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={readOnly}
        />
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input my-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={saveInCompleteOrder}
          onChange={(e) => setSaveInCompleteOrder(e.target.checked)} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Complete Sale Order</label>
      </div>
    </form>
  );
};

export default SaleOrderForm;