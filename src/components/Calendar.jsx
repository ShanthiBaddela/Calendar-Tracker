import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import Sidebar from './Sidebar';

const mockCommunications = {
  '2025-01-05': [
    { type: 'In-person Meeting', description: 'Discussion about Q1 goals' },
  ],
  '2025-01-10': [
    { type: 'Email', description: 'Project updates' },
  ],
  '2025-01-15': [
    { type: 'Video Call', description: 'Weekly team sync-up' },
  ],
  '2025-01-20': [
    { type: 'LinkedIn Post', description: 'Shared company achievements' },
  ],
  '2025-01-25': [
    { type: 'Follow-up Email', description: 'Reminder for pending approvals' },
  ],
};

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateKey = date.toISOString().split('T')[0];
      const comms = mockCommunications[dateKey];
      if (comms) {
        return (
          <ul className="tile-communications">
            {comms.map((comm, index) => (
              <li key={index}>
                <strong>{comm.type}</strong>: {comm.description}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  };

  return (
    <div className="calendar-view">
      <Sidebar type="user" />
      <h2>Calendar View</h2>
      <div className="calendar-container">
        <Calendar
          onClickDay={(date) => setSelectedDate(date.toISOString().split('T')[0])}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
};

export default CalendarView;
