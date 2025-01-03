import React from 'react';
import { saveAs } from 'file-saver';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { jsPDF } from "jspdf";
import '../styles/communicationFrequency.css';
import Sidebar from './Sidebar';

const CommunicationFrequencyReport = () => {
  const data = [
    { method: 'Email', frequency: 10 },
    { method: 'LinkedIn Post', frequency: 15 },
    { method: 'Phone Call', frequency: 8 },
  ];

  const downloadCSV = () => {
    const csvData = data.map(row => `${row.method},${row.frequency}`).join('\n');
    const blob = new Blob([`Method,Frequency\n${csvData}`], { type: 'text/csv' });
    saveAs(blob, 'CommunicationFrequencyReport.csv');
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pdfData = data.map((row, index) => ({
      method: row.method,
      frequency: row.frequency,
      yPosition: 20 + index * 10,
    }));

    doc.text("Method", 10, 10);
    doc.text("Frequency", 60, 10);

    pdfData.forEach(content => {
      doc.text(content.method, 10, content.yPosition);
      doc.text(content.frequency.toString(), 60, content.yPosition);
    });

    doc.save("CommunicationFrequencyReport.pdf");
  };

  return (
    <div>
      <Sidebar type="report"/>
    <div className="communication-report-container">
      <h2>Communication Frequency Report</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="method" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="frequency" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <button onClick={downloadCSV}>Download CSV</button>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
    </div>
  );
};

export default CommunicationFrequencyReport;
