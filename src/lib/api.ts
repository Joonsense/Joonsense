import axios from 'axios';

export async function fetchStablecoins() {
  const res = await axios.get('https://stablecoins.llama.fi/stablecoins');
  return res.data;
}
