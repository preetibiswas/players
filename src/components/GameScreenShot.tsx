import React from 'react'
import useScreenshots from '../hooks/useScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react'

interface Props {
  gameId: number
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId)
  console.log('screenshort', data)
  if (isLoading) return null
  if (error) throw error
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} borderRadius="5px">
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenShot
