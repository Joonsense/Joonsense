-- Supabase schema for YieldScope
-- RLS disabled for simplicity

create table markets (
  id serial primary key,
  name text not null,
  class text check (class in ('RWA','Stable','AI')),
  link text,
  created_at timestamptz default now()
);

create table assets (
  id serial primary key,
  market_id integer references markets(id),
  symbol text not null,
  lockup text,
  risk_score int check (risk_score between 1 and 5),
  tvl numeric,
  created_at timestamptz default now()
);

create table yields (
  id serial primary key,
  asset_id integer references assets(id),
  apy numeric,
  apr numeric,
  timestamp timestamptz default now()
);

create table insights (
  id serial primary key,
  message text,
  level text,
  created_at timestamptz default now()
);

-- indexes
create index on assets(market_id);
create index on yields(asset_id, timestamp desc);
