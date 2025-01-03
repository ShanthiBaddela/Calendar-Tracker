import React from 'react';
import Sidebar from '../components/Sidebar';
import CommunicationFrequencyReport from '../components/CommunicationFrequencyReport';

const Report = () => {
  return (
    <div className='report-page'>
        <Sidebar type="report"/>
    <div className="report">
      <h1>Reporting & Analytics</h1>
        <CommunicationFrequencyReport />
    </div>
    </div>
  );
};

export default Report;
