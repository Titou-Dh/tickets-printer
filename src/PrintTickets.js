import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Ticket from './Ticket';

const PrintTickets = ({ tickets }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef}>
        {tickets.map((ticket, index) => (
          <Ticket
            key={index}
            ticketNumber={ticket.ticketNumber}
            name={ticket.name}
            class={ticket.class}
            fee={ticket.fee}
            date={ticket.date}
          />
        ))}
      </div>
      <button
        onClick={handlePrint}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Print Tickets
      </button>
    </div>
  );
};

export default PrintTickets;
