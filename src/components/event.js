import React, { useState } from 'react';

const Event = ({ title, date, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
      <h3>{date} - {title}</h3>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

export default Event;
