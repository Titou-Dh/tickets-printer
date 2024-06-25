import React, { useState } from 'react';
import PrintTickets from './PrintTickets';

const TicketForm = () => {
  const [startNumber, setStartNumber] = useState('');
  const [finishNumber, setFinishNumber] = useState('');
  const [tickets, setTickets] = useState([]);

  const handleGenerateTickets = () => {
    const start = parseInt(startNumber, 10);
    const finish = parseInt(finishNumber, 10);

    if (isNaN(start) || isNaN(finish) || start > finish) {
      alert('Please enter valid start and finish numbers');
      return;
    }

    const generatedTickets = [];
    for (let i = start; i <= finish; i++) {
      generatedTickets.push({
        ticketNumber: i,
        name: "اسم الطالب",
        class: "القسم",
        fee: "المعلوم",
        date: new Date().toLocaleDateString('ar-EG'),
      });
    }

    setTickets(generatedTickets);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startNumber">
          Start Number:
        </label>
        <input
          type="number"
          id="startNumber"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={startNumber}
          onChange={(e) => setStartNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="finishNumber">
          Finish Number:
        </label>
        <input
          type="number"
          id="finishNumber"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={finishNumber}
          onChange={(e) => setFinishNumber(e.target.value)}
        />
      </div>
      <button
        onClick={handleGenerateTickets}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Generate Tickets
      </button>

      {tickets.length > 0 && <PrintTickets tickets={tickets} />}
    </div>
  );
};

export default TicketForm;
