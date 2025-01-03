import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = ({ type, notificationsCount = 5 }) => {
  const getSidebarItems = () => {
    switch (type) {
      case 'admin':
        return [{ name: 'Manage Companies', path: '/admin/manage-companies' },
        { name: 'Manage Communication Methods', path: '/admin/manage-communication-methods' },];
      case 'user':
        return [{ name: 'Dashboard', path: '/user/dashboard' }, { name: 'Calendar', path: '/user/calendar' }, { name: 'Notifications', path: '/user/notifications', badge: notificationsCount },];
      case 'report':
        return [{ name: 'Communication Frequency Report', path: '/report/communication-frequency'},
          { name: 'Engagement Effectiveness Dashboard', path: '/report/engagement-effectiveness' },
          { name: 'Overdue Communication Trends', path: '/report/overdue-trends' },
          { name: 'Real-Time Activity Log', path: '/report/activity-log' },
        ];
      default:
        return [];
    }
  };



  const sidebarItems = getSidebarItems();

  return (
    <div className="sidebar fixed">
      <ul>
        {sidebarItems.map((item, index) => (
          
          <li key={index}>
            <Link to={item.path} style={{display:"flex", alignItems:"center"}}>
              {item.name}
              {item.badge >0 && (
                <span className='badge'>{item.badge}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Sidebar;




