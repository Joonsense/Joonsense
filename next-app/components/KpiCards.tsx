'use client'
import useYields from '../hooks/useYields'

interface Props {
  assetClass?: string
}

export default function KpiCards({ assetClass }: Props) {
  const { data } = useYields(assetClass)
  const tvl = data?.yields.reduce((sum: number, y: any) => sum + (y.assets.tvl || 0), 0)
  const avgApy =
    data?.yields.reduce((sum: number, y: any) => sum + (y.apy || 0), 0) /
    (data?.yields.length || 1)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div className="bg-gray-800 p-2 rounded">Total TVL: {tvl}</div>
      <div className="bg-gray-800 p-2 rounded">Avg APY: {avgApy?.toFixed(2)}%</div>
      <div className="bg-gray-800 p-2 rounded">24 h Flux: -</div>
      <div className="bg-gray-800 p-2 rounded">Risk Alerts: -</div>
    </div>
  )
}
