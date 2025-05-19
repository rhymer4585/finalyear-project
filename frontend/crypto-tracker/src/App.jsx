import React, { useEffect, useState } from 'react';
import CoinList from './CoinList';
// import UserRegister from './UserRegistration';  // fixed import name
import './App.css';
// import UserRegistration from './UserRegistration'
import RegisterUser from './UserRegistration';
function App() {
  const [coins, setCoins] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

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

        <button
          style={{
            padding: '10px 20px',
            marginBottom: '20px',
            backgroundColor: '#00bfa5',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => setShowRegister(!showRegister)}
        >
          {showRegister ? 'Hide Registration' : 'Register User'}
        </button>

        {showRegister && <RegisterUser />}  {/* component name matches import */}

        <CoinList coins={coins} />
      </div>
    </div>
  );
}

export default App;
