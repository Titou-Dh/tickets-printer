import React from 'react';
import ReactDOM from 'react-dom';
import TicketForm from './TicketForm';

const App = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Ticket Generator</h1>
      <TicketForm />
    </div>
  </div>
);



export default App