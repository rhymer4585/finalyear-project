import React from 'react';
import CoinList from './CoinList';
import SavedCoins from './SavedCoins';

function App() {
  return (
    <div>
      <h1>Crypto Tracker</h1>
      <CoinList />
      <SavedCoins />
    </div>
  );
}

export default App;