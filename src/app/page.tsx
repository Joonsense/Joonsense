'use client';

import * as Tabs from '@radix-ui/react-tabs';
import StablecoinTable from '../components/StablecoinTable';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">DeFi Dashboard</h1>
      <Tabs.Root defaultValue="stablecoins">
        <Tabs.List className="flex space-x-4 mb-4">
          <Tabs.Trigger value="stablecoins">Stablecoins</Tabs.Trigger>
          <Tabs.Trigger value="defi">DeFi Protocols</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="stablecoins">
          <StablecoinTable />
        </Tabs.Content>
        <Tabs.Content value="defi">
          <div>Coming soon...</div>
        </Tabs.Content>
      </Tabs.Root>
    </main>
  );
}
