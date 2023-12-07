import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'

interface FetchGenraResponse {
  results: Genra[]
}

export interface Genra {
  id: number
  name: string
  slug: string
  image_background: string
}
const useGenra = () => {
  const [genras, setGenras] = useState<Genra[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGenraResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenras(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })
    return () => controller.abort()
  }, [])
  return { genras, error, isLoading }
}

export default useGenra
