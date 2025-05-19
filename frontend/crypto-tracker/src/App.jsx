import React, { useEffect, useState } from 'react';
import CoinList from './CoinList';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(res => res.json())
      .then(setCoins)
      .catch(console.error);
  }, []);

  return (
    <div className="wrapper">
      <div className="left-side"></div>
      <div className="right-side">
        <h1>Crypto Tracker</h1>
        <CoinList coins={coins} />
      </div>
    </div>
  );
}

export default App;
