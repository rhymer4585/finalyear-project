import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CoinDetail() {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCoin(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!coin) return <div>Coin not found</div>;

  return (
    <div className="coin-details">
      <Link to="/">← Back to list</Link>
      <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
      <img src={coin.image.large} alt={coin.name} width="100" />
      <p>Current Price: ${coin.market_data.current_price.usd}</p>
      <p>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</p>
      <p>24h High: ${coin.market_data.high_24h.usd}</p>
      <p>24h Low: ${coin.market_data.low_24h.usd}</p>
      <p dangerouslySetInnerHTML={{ __html: coin.description.en.split('. ')[0] + '.' }} />
    </div>
  );
}

export default CoinDetail;
