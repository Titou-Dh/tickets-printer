import React, { useState } from 'react';

const TicketForm = ({ onGenerate }) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(start, end);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
            <label>
                Start Serial Number:
                <input type="number" value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <label>
                End Serial Number:
                <input type="number" value={end} onChange={(e) => setEnd(e.target.value)} />
            </label>
            <button type="submit" className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'>Generate Tickets</button>
        </form>
    );
};

export default TicketForm;
