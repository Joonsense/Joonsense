import '../styles/globals.css'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import AssetSidebar from '../components/AssetSidebar'

export const metadata = {
  title: 'YieldScope',
  description: 'Aggregated crypto yields',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages()
  return (
    <html lang="kr" className="dark">
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen">
            <AssetSidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
          <footer className="text-center p-2 text-xs text-gray-500">
            정보 제공 목적·투자 권유 아님
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
