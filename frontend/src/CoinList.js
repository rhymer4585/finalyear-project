import React, { useEffect, useState } from 'react';

function CoinList() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10')
      .then(res => res.json())
      .then(data => setCoins(data));
  }, []);

  const saveCoin = async (coin) => {
    const response = await fetch('http://localhost:5000/api/coins/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coin),
    });

    if (response.ok) alert('Coin saved to DB');
    else alert('Failed to save coin');
  };

  return (
    <div>
      <h2>Top 10 Coins</h2>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            {coin.name} (${coin.current_price})
            <button onClick={() => saveCoin(coin)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinList;