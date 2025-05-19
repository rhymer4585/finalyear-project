import React from 'react';
import './CoinList.css';

function CoinList({ coins }) {
  return (
    <div className="coin-list">
      {coins.map(coin => (
        <a
          key={coin.id}
          href={`coin-details.html?id=${coin.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="coin" style={{ cursor: 'pointer' }}>
            <div className="coin-left">
              <img src={coin.image} alt={coin.name} width="30" />
              <div>
                <div className="coin-name">{coin.name}</div>
                <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
              </div>
            </div>
            <div className="coin-right">
              <div className="coin-price">${coin.current_price.toFixed(2)}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default CoinList;
