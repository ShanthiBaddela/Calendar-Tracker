import React from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import '../styles/engagementDashboard.css';
import Sidebar from './Sidebar';

const EngagementEffectivenessDashboard = () => {
  const metrics = [
    { method: 'Email', successRate: 75 },
    { method: 'LinkedIn Post', successRate: 60 },
    { method: 'Phone Call', successRate: 85 },
  ];

  const downloadCSV = () => {
    const csvData = metrics.map(row => `${row.method},${row.successRate}`).join('\n');
    const blob = new Blob([`Method,Success Rate\n${csvData}`], { type: 'text/csv' });
    saveAs(blob, 'EngagementEffectivenessReport.csv');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pdfData = metrics.map((row, index) => ({
      method: row.method,
      successRate: row.successRate,
      yPosition: 20 + index * 10,
    }));

    // Adding table headers
    doc.text('Method', 10, 10);
    doc.text('Success Rate', 60, 10);

    // Adding rows dynamically based on the mapped content
    pdfData.forEach(content => {
      doc.text(content.method, 10, content.yPosition);
      doc.text(content.successRate.toString(), 60, content.yPosition);
    });

    // Download the PDF
    doc.save('EngagementEffectivenessReport.pdf');
  };

  return (
    <div>
      <Sidebar type="report" />
      <div className="engagement-dashboard">
        <h2>Engagement Effectiveness</h2>
        {metrics.map((metric, index) => (
          <div key={index} className="metric-container">
            <h3>{metric.method}</h3>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${metric.successRate}%` }}
              ></div>
            </div>
            <p>{metric.successRate}%</p>
          </div>
        ))}
        <div className="download-buttons">
          <button onClick={downloadCSV}>Download CSV</button>
          <button onClick={downloadPDF}>Download PDF</button>
        </div>
      </div>
    </div>
  );
};

export default EngagementEffectivenessDashboard;
