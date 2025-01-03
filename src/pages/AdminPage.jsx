import React from 'react';
import Sidebar from '../components/Sidebar';
import ManageCompanies from '../components/ManageCompanies'
import '../styles/adminpage.css'; 

const AdminPage = () => {
    
  return (
    <div className="admin-page">
      <Sidebar type="admin"/>
      <ManageCompanies />
    </div>
  );
};

export default AdminPage;
