import React, { useState } from 'react';
import '../styles/notifications.css';
import Sidebar from './Sidebar';

const mockData = {
  overdue: [
    { company: 'TechCorp', lastCommunication: 'LinkedIn Post', overdueBy: '2 days' },
    { company: 'InnoVate', lastCommunication: 'Phone Call', overdueBy: '5 days' },
    { company: 'BlueSky Enterprises', lastCommunication: 'Video Call', overdueBy: '7 days' },
    { company: 'Visionary Tech', lastCommunication: 'Email', overdueBy: '10 days' },
    { company: 'GreenTech Solutions', lastCommunication: 'Conference Meeting', overdueBy: '3 days' },
  ],
  today: [
    { company: 'FuturePath Inc.', task: 'Follow-up Email', time: '10:00 AM' },
    { company: 'Bright Innovations', task: 'Video Call', time: '11:30 AM' },
    { company: 'TechCorp', task: 'Phone Call', time: '2:00 PM' },
    { company: 'InnoVate', task: 'Email', time: '4:00 PM' },
    { company: 'BlueSky Enterprises', task: 'LinkedIn Post', time: '5:30 PM' },
  ],
};

const Notifications = () => {
  const [overdue, setOverdue] = useState(mockData.overdue);
  const [today, setToday] = useState(mockData.today);

  return (
    <div className="notifications-page">
      <Sidebar type="user" />
      <div className="notifications">
        <h2>Notifications</h2>

        <div className="notifications-section">
          <h3>Overdue Communications</h3>
          {overdue.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Last Communication</th>
                  <th>Overdue By</th>
                </tr>
              </thead>
              <tbody>
                {overdue.map((item, index) => (
                  <tr key={index}>
                    <td>{item.company}</td>
                    <td>{item.lastCommunication}</td>
                    <td>{item.overdueBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No overdue communications.</p>
          )}
        </div>

        <div className="notifications-section">
          <h3>Today’s Communications</h3>
          {today.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Task</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {today.map((item, index) => (
                  <tr key={index}>
                    <td>{item.company}</td>
                    <td>{item.task}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No communications scheduled for today.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
