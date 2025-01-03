import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Report from './pages/Analytics'
import ManageCompanies from './components/ManageCompanies';
import ManageCommunicationMethods from './components/ManageCommunicationMethods';
import CalendarView from './components/Calendar';
import Dashboard from './components/Dashboard';
import Notifications from './components/Notifications';
import Homepage from './pages/HomePage';
import CommunicationFrequencyReport from './components/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './components/EngagementEffectivenessDashboard';
import OverdueTrendsChart from './components/OverdueTrends';
import ActivityLogTable from './components/RealTimeActivityLog';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/admin/manage-companies" element={<ManageCompanies />} />
        <Route path="/admin/manage-communication-methods" element={<ManageCommunicationMethods />} />
        <Route path="/user/calendar" element={<CalendarView />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/notifications" element={<Notifications />} />
        <Route path="/report/communication-frequency" element={<CommunicationFrequencyReport />} />
        <Route path="/report/engagement-effectiveness" element={<EngagementEffectivenessDashboard />} />
        <Route path="/report/overdue-trends" element={<OverdueTrendsChart />} />
        <Route path="/report/activity-log" element={<ActivityLogTable />} /> 


      </Routes>
    </Router>
  );
}

export default App;
