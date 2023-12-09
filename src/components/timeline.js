import React from 'react';
import Event from './event';

const Timeline = ({ events }) => {
  return (
    <div style={{ borderLeft: '2px solid black', paddingLeft: '20px' }}>
      {events.map(event => (
        <Event key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Timeline;