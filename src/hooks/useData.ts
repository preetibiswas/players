import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from 'axios'

interface FetchResponse<T> {
  results: T[]
}

export interface Genra {
  id: number
  name: string
  slug: string
  image_background: string
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(
    () => {
      setIsLoading(true)
      const controller = new AbortController()
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results)
          setIsLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return
          setError(err.message)
          setIsLoading(false)
        })
      return () => controller.abort()
    },
    deps ? [...deps] : [],
  )
  return { data, error, isLoading }
}

export default useData
