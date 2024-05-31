import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import SaleOrdersTable from './Components/SaleOrdersTable';
import './styles.css';

const App = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', price: 1000, lastModified: new Date().toISOString() },
    { id: 2, customerName: 'Jane Smith', price: 1500, lastModified: new Date().toISOString() },
  ]);
  const [nextId, setNextId] = useState(3); // Next ID starts at 3

  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  const handleView = (order) => {
    alert(`View order details:\n\nID: ${order.id}\nCustomer: ${order.customerName}\nPrice: ₹${order.price}\nLast Modified: ${order.lastModified}`);
  };

  const handleDelete = (order) => {
    if (window.confirm(`Are you sure you want to delete the order with ID ${order.id}?`)) {
      setOrders(orders.filter(o => o.id !== order.id));
    }
  };

  const handleEdit = (order) => {
    const updatedOrders = orders.map(o => {
      if (o.id === order.id) {
        return { ...o, lastModified: new Date().toISOString() };
      }
      return o;
    });
    setOrders(updatedOrders);
  };
  
  const handleAddOrder = () => {
    const newOrder = {
      id: nextId, // Use nextId as the id for the new order
      customerName: 'New Customer',
      price: Math.floor(Math.random() * 1000) + 500,
      lastModified: new Date().toISOString() // Initialize lastModified to current date and time
    };
    setOrders([...orders, newOrder]);
    setNextId(nextId + 1); // Increment the next ID for the next order
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard>
                <div className="container mt-3">
                  <h1>Sale Orders</h1>
                  <button onClick={handleAddOrder} className="btn btn-primary mb-3">Add Order</button>
                  <SaleOrdersTable 
                    orders={orders} 
                    onEdit={handleEdit} 
                    onView={handleView} 
                    onDelete={handleDelete} 
                    readOnly={false} 
                  />
                </div>
              </Dashboard>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
