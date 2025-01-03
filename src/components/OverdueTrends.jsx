import React from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/overdueTrends.css'
import Sidebar from './Sidebar';

const data = [
  { date: '2025-01-01', overdue: 5, company: 'Company A' },
  { date: '2025-01-02', overdue: 8, company: 'Company B' },
  { date: '2025-01-03', overdue: 3, company: 'Company C' },
  { date: '2025-01-04', overdue: 6, company: 'Company D' },
  { date: '2025-01-05', overdue: 9, company: 'Company E' },
  { date: '2025-01-06', overdue: 4, company: 'Company F' },
];

const OverdueTrendsChart = () => {

  const downloadCSV = () => {
    const csvData = data.map(row => `${row.date},${row.company},${row.overdue}`).join('\n');
    const blob = new Blob([`Date,Company,Overdue\n${csvData}`], { type: 'text/csv' });
    saveAs(blob, 'OverdueTrendsReport.csv');
  };
  
  
  const downloadPDF = () => {
    const doc = new jsPDF();
    const pdfData = data.map((row, index) => ({
      date: row.date,
      company: row.company,
      overdue: row.overdue,
      yPosition: 20 + index * 10,
    }));
  
    // Adding table headers
    doc.text('Date', 10, 10);
    doc.text('Company', 50, 10);
    doc.text('Overdue', 100, 10);
  
    // Adding rows dynamically based on the mapped content
    pdfData.forEach(content => {
      doc.text(content.date, 10, content.yPosition);
      doc.text(content.company, 50, content.yPosition);
      doc.text(content.overdue.toString(), 100, content.yPosition);
    });
  
    // Download the PDF
    doc.save('OverdueTrendsReport.pdf');
  };
  

  return (
    <div>
      <Sidebar type="report"/>
    <div className="overdue-trends-chart-container">
      <h2>Overdue Trends Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="overdue" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div className="download-buttons">
        <button onClick={downloadCSV}>Download CSV</button>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
    </div>
  );
};

export default OverdueTrendsChart;
