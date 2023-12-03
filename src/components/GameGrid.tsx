import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface FetchGameResponse {
  count: number
  results: Game[]
}
interface Game {
  id: number
  name: string
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    apiClient
      .get<FetchGameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err))
  }, [])
  return (
    <ul>
      {games.map((games) => (
        <li key={games.id}>{games.name}</li>
      ))}
    </ul>
  )
}

export default GameGrid
