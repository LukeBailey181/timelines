import React, { useState } from 'react';
import Timeline from './components/timeline';
import EventModal from './components/event_modal';

const App = () => {
  const [events] = useState([
    { id: 1, title: 'Event 1', date: '1861', description: 'Description 1' },
    { id: 1, title: 'Event 2', date: '1870', description: 'Description 1' },
    { id: 1, title: 'Event 3', date: '1850', description: 'Description 1' },
  ]);
  const [selectedEvents, setSelectedEvents] = useState([null, null]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventSelect = (event, index) => {
    const newSelectedEvents = [...selectedEvents];
    newSelectedEvents[index] = event;
    setSelectedEvents(newSelectedEvents);
  };

  const handleCompareClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, right: 0 }}>
        <select onChange={(e) => handleEventSelect(events[e.target.value], 0)}>
          {events.map((event, index) => (
            <option key={event.id} value={index}>{event.title}</option>
          ))}
        </select>
        <select onChange={(e) => handleEventSelect(events[e.target.value], 1)}>
          {events.map((event, index) => (
            <option key={event.id} value={index}>{event.title}</option>
          ))}
        </select>
        <button onClick={handleCompareClick}>Compare</button>
      </div>

      <Timeline events={events} />

      {isModalOpen && selectedEvents[0] && selectedEvents[1] && (
        <EventModal
          event1={selectedEvents[0]}
          event2={selectedEvents[1]}
          connectionInfo="Info about the connection"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
