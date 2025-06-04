'use client'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'

export default function DetailDrawer({ yieldItem }: { yieldItem: any }) {
  const [open, setOpen] = useState(false)

  if (!yieldItem) return null

  const data = {
    labels: Array(30).fill(''),
    datasets: [
      {
        data: yieldItem.history || [],
        borderColor: '#f59e0b',
      },
    ],
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>Details</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setOpen(false)}>
          <div className="absolute right-0 top-0 w-80 h-full bg-gray-900 p-4">
            <Line data={data} options={{ plugins: { legend: { display: false } } }} />
            <a
              href={`${yieldItem.assets.markets.link}?utm_source=yieldscope`}
              target="_blank"
              className="mt-2 block text-center bg-teal-500 rounded p-2"
            >
              Deposit
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
