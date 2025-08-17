'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Stablecoin {
  name: string;
  symbol: string;
  price: number;
  circulating: number;
}

export default function StablecoinTable() {
  const [data, setData] = useState<Stablecoin[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('https://stablecoins.llama.fi/stablecoins');
        const list = res.data?.peggedAssets?.slice(0, 10) ?? [];
        const mapped = list.map((item: any) => ({
          name: item.name,
          symbol: item.symbol,
          price: item.price,
          circulating: item.circulating
        }));
        setData(mapped);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <table className="min-w-full text-left">
      <thead>
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Price</th>
          <th className="p-2">Circulating</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin) => (
          <tr key={coin.symbol}>
            <td className="p-2">{coin.name} ({coin.symbol})</td>
            <td className="p-2">{coin.price.toFixed(2)}</td>
            <td className="p-2">{coin.circulating.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
