import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export default function useYields(assetClass?: string) {
  const { data, mutate } = useSWR('/api/yields', fetcher)
  return {
    data: data || { yields: [] },
    mutate,
  }
}
