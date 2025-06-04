import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/functions/v1/getYields')
  const json = await res.json()
  return NextResponse.json(json.data)
}
