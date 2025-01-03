import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const UserPage = () => {

  const notificationsCount = 5;
    
  return (
    <div className="user-page">
      <Sidebar type="user" notificationsCount={notificationsCount}/>
      <Dashboard />
    </div>
  );
};

export default UserPage;
