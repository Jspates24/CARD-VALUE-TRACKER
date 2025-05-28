
'use client';

import React, { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const correctPassword = 'momisthebest';

  const handleUnlock = () => {
    if (password === correctPassword) setUnlocked(true);
    else alert('Incorrect password');
  };

  if (!unlocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl mb-6 font-bold">Enter Password to Access Tracker</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-64"
          placeholder="Password"
        />
        <button
          onClick={handleUnlock}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Jonah's Card Value Tracker</h1>
      <div>
        <nav className="mb-4 flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setSection('singles')}
          >
            Singles
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setSection('sealed')}
          >
            Sealed
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setSection('graded')}
          >
            Graded
          </button>
        </nav>

        <SectionDisplay />
      </div>
    </div>
  );

  function SectionDisplay() {
    const [section, setSection] = useState('singles');

    return (
      <>
        {section === 'singles' && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Singles Section</h2>
            <p>Coming soon: Add singles, fetch TCGplayer prices, track profit/loss.</p>
          </div>
        )}
        {section === 'sealed' && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Sealed Section</h2>
            <p>Coming soon: Add sealed products, fetch prices, profit tracking.</p>
          </div>
        )}
        {section === 'graded' && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">Graded Section</h2>
            <p>Coming soon: Add graded cards, fetch market prices, track grades.</p>
          </div>
        )}
      </>
    );
  }
}
