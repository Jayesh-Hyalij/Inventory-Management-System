// File path: src/Dashboard.js

import React, { useState } from 'react';
import Tabs from './Tabs';
import SaleOrdersTable from './SaleOrdersTable';
import SaleOrderModal from './SaleOrderModal';
import LogoutButton from './LogOutPage';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [activeOrders, setActiveOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAddOrder = () => {
    setEditingOrder(null);
    setShowModal(true);
  };

  const handleEditOrder = (order) => {
    setEditingOrder(order);
    setShowModal(true);
  };

  const handleSaveOrder = (order) => {
    const isComplete = order.isComplete;

    if (editingOrder) {
      // Update existing order
      if (isComplete) {
        setCompletedOrders((prev) => {
          const updatedCompletedOrders = prev.filter((o) => o.id !== order.id);
          return [...updatedCompletedOrders, order];
        });
        setActiveOrders((prev) => prev.filter((o) => o.id !== order.id));
      } else {
        setActiveOrders((prev) => {
          const updatedActiveOrders = prev.filter((o) => o.id !== order.id);
          return [...updatedActiveOrders, order];
        });
      }
    } else {
      // Add new order
      const newOrder = { ...order, id: Date.now(), isComplete };
      if (isComplete) {
        setCompletedOrders((prev) => [...prev, newOrder]);
      } else {
        setActiveOrders((prev) => [...prev, newOrder]);
      }
    }
    setShowModal(false);
  };

  const handleDeleteOrder = (orderId) => {
    if (activeTab === 'active') {
      setActiveOrders((prev) => prev.filter((order) => order.id !== orderId));
    } else {
      setCompletedOrders((prev) => prev.filter((order) => order.id !== orderId));
    }
  };

  const renderTable = () => {
    if (activeTab === 'active') {
      return (
        <SaleOrdersTable 
          orders={activeOrders} 
          onEdit={handleEditOrder} 
          onDelete={handleDeleteOrder} 
        />
      );
    } else {
      return (
        <SaleOrdersTable 
          orders={completedOrders} 
          onEdit={handleEditOrder} 
          onDelete={handleDeleteOrder} 
          readOnly 
        />
      );
    }
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>Sale Orders</h1>
      </header>
      <button onClick={toggleDarkMode} id="darkBtn" className={`navBtn-4 btn btn-outline-success ${darkMode ? 'dark-mode-btn' : ''}`}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className={`navBtn ${darkMode ? 'dark-mode' : ''}`}>
        <Tabs className="navBtn-1 btn btn-outline-success" activeTab={activeTab} setActiveTab={setActiveTab} />
        <button onClick={handleAddOrder} className="navBtn-2 btn btn-outline-success">
          + Sale Order
        </button>
        <LogoutButton className="navBtn-3" />
      </div>
      {renderTable()}
      <SaleOrderModal
        show={showModal}
        onClose={() => setShowModal(false)}
        order={editingOrder}
        onSave={handleSaveOrder}
        readOnly={activeTab === 'completed'}
      />
    </div>
  );
};

export default Dashboard;
