'use client'
import Link from 'next/link'

const links = [
  { href: '/', label: 'All' },
  { href: '/RWA', label: 'RWA', color: 'text-amber-400' },
  { href: '/Stable', label: 'Stable', color: 'text-teal-400' },
  { href: '/AI', label: 'AI Yield', color: 'text-violet-400' },
]

export default function AssetSidebar() {
  return (
    <aside className="w-32 border-r border-gray-700 p-2 space-y-2">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={`${l.color} block`}>
          {l.label}
        </Link>
      ))}
    </aside>
  )
}
