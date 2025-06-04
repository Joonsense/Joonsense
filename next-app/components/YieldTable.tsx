'use client'
import { useEffect, useState } from 'react'
import useYields from '../hooks/useYields'

interface Props {
  assetClass?: string
}

export default function YieldTable({ assetClass }: Props) {
  const { data, mutate } = useYields(assetClass)
  const [sorted, setSorted] = useState<string>('apy')

  useEffect(() => {
    const id = setInterval(() => mutate(), 30000)
    return () => clearInterval(id)
  }, [mutate])

  return (
    <table className="min-w-full text-sm">
      <thead>
        <tr>
          <th>Asset</th>
          <th onClick={() => setSorted('apy')}>APY</th>
          <th onClick={() => setSorted('apr')}>APR</th>
          <th>Lock-up</th>
          <th>TVL</th>
          <th>Risk</th>
        </tr>
      </thead>
      <tbody>
        {data?.yields
          .filter((y: any) => !assetClass || y.assets.markets.class === assetClass)
          .sort((a: any, b: any) => b[sorted] - a[sorted])
          .map((y: any) => (
            <tr key={y.id} className="hover:bg-gray-800 cursor-pointer">
              <td>{y.assets.symbol}</td>
              <td>{y.apy}%</td>
              <td>{y.apr}%</td>
              <td>{y.assets.lockup}</td>
              <td>{y.assets.tvl}</td>
              <td className={`text-${y.assets.risk_score > 3 ? 'red' : 'green'}-500`}>
                {y.assets.risk_score}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
