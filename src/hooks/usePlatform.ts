import apiClient from '../services/api-client'
import useData from './useData'
import { useQuery } from '@tanstack/react-query'
import { FetchResponse } from './useData'

export interface Platform {
  id: number
  name: string
  slug: string
}

// const usePlatform = () => useData<Platform>('/platforms/lists/parents')

const usePlatform = () =>
  useQuery({
    queryKey: ['platform'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
  })

export default usePlatform
