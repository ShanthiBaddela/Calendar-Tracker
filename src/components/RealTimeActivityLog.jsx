import React from 'react';
import { jsPDF } from "jspdf";
import { saveAs } from 'file-saver';
import Sidebar from './Sidebar';
import '../styles/activityLog.css'

const logs = [
  { date: '2025-01-01', user: 'Admin', company: 'Company A', action: 'Email Sent' },
  { date: '2025-01-02', user: 'User1', company: 'Company B', action: 'Phone Call Made' },
  { date: '2025-01-03', user: 'User2', company: 'Company C', action: 'Message Sent' },
  { date: '2025-01-04', user: 'Admin', company: 'Company D', action: 'Meeting Scheduled' },
  { date: '2025-01-05', user: 'User3', company: 'Company E', action: 'Report Generated' },
  { date: '2025-01-06', user: 'Admin', company: 'Company F', action: 'Email Sent' },
  { date: '2025-01-07', user: 'User4', company: 'Company G', action: 'Phone Call Made' },
  { date: '2025-01-08', user: 'User5', company: 'Company H', action: 'Message Sent' },
];

const ActivityLogTable = () => {

  const downloadCSV = () => {
    const csvData = logs.map(row => `${row.date},${row.user},${row.company},${row.action}`).join('\n');
    const blob = new Blob([`Date,User,Company,Action\n${csvData}`], { type: 'text/csv' });
    saveAs(blob, 'ActivityLogReport.csv');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pdfData = logs.map((log, index) => ({
      date: log.date,
      user: log.user,
      company: log.company,
      action: log.action,
      yPosition: 20 + index * 10,
    }));

    // Adding table headers
    doc.text('Date', 10, 10);
    doc.text('User', 40, 10);
    doc.text('Company', 90, 10);
    doc.text('Action', 140, 10);

    // Adding rows dynamically based on the mapped content
    pdfData.forEach(content => {
      doc.text(content.date, 10, content.yPosition);
      doc.text(content.user, 40, content.yPosition);
      doc.text(content.company, 90, content.yPosition);
      doc.text(content.action, 140, content.yPosition);
    });

    // Download the PDF
    doc.save('ActivityLogReport.pdf');
  };

  return (
    <div>
      <Sidebar type="report" />
      <div className="activity-log-page">
        <h2>Activity Log</h2>
        <table className="activity-log">
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>{log.date}</td>
                <td>{log.user}</td>
                <td>{log.company}</td>
                <td>{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="download-btn" onClick={downloadCSV}>Download CSV</button>
        <button className="download-btn" onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};

export default ActivityLogTable;
