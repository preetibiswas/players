import apiClient from '../services/api-client'
import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'

interface FetchGameResponse {
  count: number
  results: Game[]
}
export interface Game {
  id: number
  name: string
  background_image: string
  metacritic: string
  rating_top: number
  platforms: { platform: Platform }[]
}
export interface Platform {
  id: number
  name: string
  slug: string
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    apiClient
      .get<FetchGameResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)
        setLoading(false)
      })
    return () => controller.abort()
  }, [])
  return { games, error, loading }
}

export default useGames
