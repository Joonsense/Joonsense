import YieldTable from '../../components/YieldTable'
import KpiCards from '../../components/KpiCards'

export default function ClassPage({ params }: { params: { class: string } }) {
  return (
    <div className="space-y-4">
      <KpiCards assetClass={params.class} />
      <YieldTable assetClass={params.class} />
    </div>
  )
}
