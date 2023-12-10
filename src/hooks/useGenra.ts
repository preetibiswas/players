/* eslint-disable no-useless-catch */
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
import { FetchResponse } from './useData'

interface FetchGenraResponse {
  results: Genra[]
}

export interface Genra {
  id: number
  name: string
  slug: string
  image_background: string
}
// const useGenra = () => {
//   const [genras, setGenras] = useState<Genra[]>([])
//   const [error, setError] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   useEffect(() => {
//     const controller = new AbortController()
//     apiClient
//       .get<FetchGenraResponse>('/genres', { signal: controller.signal })
//       .then((res) => {
//         setGenras(res.data.results)
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return
//         setError(err.message)
//         setIsLoading(false)
//       })
//     return () => controller.abort()
//   }, [])
//   return { genras, error, isLoading }
// }

const useGenra = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genra>>('/genres')
        .then((response) => response.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24hr
  })

export default useGenra
