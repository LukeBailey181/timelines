import React from 'react';

const EventModal = ({ event1, event2, connectionInfo, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>Connection</h2>
      <p><b>{event1.title}</b> and <b>{event2.title}</b></p>
      <p>{connectionInfo}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EventModal;
