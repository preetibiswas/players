import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/spinner'
import { Heading, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)

  if (isLoading) return <Spinner />
  if (error) throw error
  if (!game) {
    return <div>Error: Game not found</div>
  }
  return (
    <div>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </div>
  )
}

export default GameDetailPage
