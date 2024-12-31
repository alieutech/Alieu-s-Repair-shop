'use client';

import React, { useState } from 'react';

interface Ticket {
    id: string;
    description: string;
    status: 'In Progress' | 'Completed';
}

const Tickets: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[]>([
        { id: '12345', description: 'Screen Replacement', status: 'In Progress' },
        { id: '67890', description: 'Battery Replacement', status: 'Completed' },
    ]);
    const [description, setDescription] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleAddTicket = () => {
        if (!description.trim()) {
            setError('Sorry description cannot be empty.');
            return;
        }

        const newTicket: Ticket = {
            id: (Math.random() * 100000).toFixed(0), 
            description,
            status: 'In Progress'
        };

        setTickets([...tickets, newTicket]);
        setDescription('');
        setError(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-blue-600 text-white py-4">
                <h1 className="text-center text-3xl font-bold">Tickets</h1>
            </header>
            <main className="p-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Your Tickets</h2>
                    <p className="text-gray-600 mb-6">
                        Create a new ticket or view your existing ones below.
                    </p>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Enter ticket description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <button
                            onClick={handleAddTicket}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Add Ticket
                        </button>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Tickets</h3>
                        <ul className="space-y-4">
                            {tickets.map((ticket) => (
                                <li
                                    key={ticket.id}
                                    className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                                >
                                    <span>{`Ticket #${ticket.id} - ${ticket.description}`}</span>
                                    <span
                                        className={`font-semibold ${
                                            ticket.status === 'In Progress'
                                                ? 'text-blue-500'
                                                : 'text-green-500'
                                        }`}
                                    >
                                        {ticket.status}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tickets;
