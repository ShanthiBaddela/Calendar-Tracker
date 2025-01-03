import React from 'react';
import { Tooltip } from 'react-tooltip';
import '../styles/dashboard.css';
import Sidebar from './Sidebar';

const mockData = [
  {
    companyName: 'TechCorp',
    lastCommunications: [
      { type: 'LinkedIn Post', date: '5th Sep', notes: 'Promoted new feature.' },
      { type: 'Email', date: '1st Sep', notes: 'Shared monthly newsletter.' },
    ],
    nextCommunication: { type: 'Phone Call', date: '10th Sep', notes: 'Discuss Q4 plans.' },
    status: 'overdue',
  },
  {
    companyName: 'InnoVate',
    lastCommunications: [
      { type: 'Phone Call', date: '4th Sep', notes: 'Followed up on project proposal.' },
      { type: 'LinkedIn Message', date: '3rd Sep', notes: 'Shared insights on industry trends.' },
    ],
    nextCommunication: { type: 'Email', date: '6th Sep', notes: 'Send contract details.' },
    status: 'due-today',
  },
  {
    companyName: 'GreenTech Solutions',
    lastCommunications: [
      { type: 'Conference Meeting', date: '8th Sep', notes: 'Presented Q3 results.' },
      { type: 'Email', date: '5th Sep', notes: 'Shared product update.' },
    ],
    nextCommunication: { type: 'LinkedIn Post', date: '12th Sep', notes: 'Announce new product.' },
    status: 'normal',
  },
  {
    companyName: 'BlueSky Enterprises',
    lastCommunications: [
      { type: 'Phone Call', date: '3rd Sep', notes: 'Discussed partnership opportunities.' },
      { type: 'Video Call', date: '2nd Sep', notes: 'Explored collaboration ideas.' },
    ],
    nextCommunication: { type: 'Email', date: '7th Sep', notes: 'Follow up on meeting notes.' },
    status: 'overdue',
  },
  {
    companyName: 'FuturePath Inc.',
    lastCommunications: [
      { type: 'LinkedIn Message', date: '9th Sep', notes: 'Shared industry updates.' },
      { type: 'In-person Meeting', date: '6th Sep', notes: 'Discussed future roadmap.' },
    ],
    nextCommunication: { type: 'Follow-up Email', date: '15th Sep', notes: 'Send draft proposal.' },
    status: 'normal',
  },
  {
    companyName: 'Bright Innovations',
    lastCommunications: [
      { type: 'Phone Call', date: '7th Sep', notes: 'Discussed new product launch.' },
      { type: 'Email', date: '4th Sep', notes: 'Shared marketing strategy.' },
    ],
    nextCommunication: { type: 'Video Call', date: '10th Sep', notes: 'Plan campaign execution.' },
    status: 'due-today',
  },
  {
    companyName: 'Visionary Tech',
    lastCommunications: [
      { type: 'Email', date: '1st Sep', notes: 'Sent quarterly report.' },
      { type: 'LinkedIn Message', date: '30th Aug', notes: 'Introduced new team members.' },
    ],
    nextCommunication: { type: 'In-person Meeting', date: '5th Sep', notes: 'Review Q3 targets.' },
    status: 'overdue',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar type="user" />
      <h2>Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((company, index) => (
            <tr key={index} className={`status-${company.status}`}>
              <td>{company.companyName}</td>
              <td>
                {company.lastCommunications.map((comm, idx) => (
                  <div
                    key={idx}
                    data-tooltip-id={`tooltip-${index}-${idx}`}
                    data-tooltip-content={comm.notes}
                  >
                    {comm.type} - {comm.date}
                    <Tooltip id={`tooltip-${index}-${idx}`} />
                  </div>
                ))}
              </td>
              <td
                data-tooltip-id={`tooltip-next-${index}`}
                data-tooltip-content={company.nextCommunication.notes}
              >
                {company.nextCommunication.type} - {company.nextCommunication.date}
                <Tooltip id={`tooltip-next-${index}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
