import React, { useEffect, useState } from 'react';

function SavedCoins() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/coins/saved')
      .then(res => res.json())
      .then(data => setSaved(data));
  }, []);

  return (
    <div>
      <h2>Saved Coins in DB</h2>
      <ul>
        {saved.map(coin => (
          <li key={coin._id}>{coin.name} - ${coin.current_price}</li>
        ))}
      </ul>
    </div>
  );
}

export default SavedCoins;