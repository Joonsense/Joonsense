# Prediction Market Aggregator

This project aggregates markets from three prediction market platforms—Polymarket, Kalshi, and Manifold Markets—into a unified schema that can be stored locally or synced to Supabase.

## Features
- Fetches market data from all three platforms in parallel
- Normalizes heterogeneous API payloads into a standard schema
- Persists merged results to `data/unified_markets.json`
- Optionally upserts rows into a Supabase table when credentials are provided
- Prints a console table of the top markets by 24-hour volume
- Runs automatically on a configurable polling schedule

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and update values as needed:
   ```bash
   cp .env.example .env
   ```
3. Run the aggregator:
   ```bash
   npm start
   ```

By default the aggregator polls every 60 seconds. You can adjust the interval and override API URLs by setting environment variables in `.env`.
