import './globals.css';
import { ReactNode } from 'react';
import { Theme } from '@radix-ui/themes';

export const metadata = {
  title: 'DeFi Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
