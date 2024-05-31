import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button className='btn btn-outline-success' onClick={() => setActiveTab('active')}>Active Sale Orders</button>
      <button className='btn btn-outline-success' onClick={() => setActiveTab('completed')}>Completed Sale Orders</button>
    </div>
  );
};

export default Tabs;
