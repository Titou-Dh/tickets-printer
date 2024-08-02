import React, { useState } from 'react';

const TicketForm = ({ onGenerate }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(start, end);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <label>
        Start Serial Number:
        <input
          type="number"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label>
        End Serial Number:
        <input
          type="number"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
        Generate Tickets
      </button>
    </form>
  );
};

export default TicketForm;
