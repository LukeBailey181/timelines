import React from 'react';

const EventModal = ({ event1, event2, connectionInfo, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: '25%', left: '25%', backgroundColor: 'white', padding: '20px', border: '1px solid black', width: '50%', borderRadius: "20px"}}>
      <h2>Comparison</h2>
      <p><b>{event1}</b> and <b>{event2}</b></p>
      <div style={{paddingTop: '10px', paddingBottom: '20px'}}>
      <p>{connectionInfo}</p>
      </div>
      <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
      <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default EventModal;
