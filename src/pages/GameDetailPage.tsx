import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { Spinner } from '@chakra-ui/spinner'
import { GridItem, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import ExpandableText from '../components/ExpandableText'
import DefinationItem from '../components/DefinationItem'
import CriticScore from '../components/CriticScore'
import GameTrailer from '../components/GameTrailer'
import GameScreenShot from '../components/GameScreenShot'

const GameDetailPage = () => {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug!)
  console.log(game)

  if (isLoading) return <Spinner />
  if (error) throw error
  if (!game) {
    return <div>Error: Game not found</div>
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <SimpleGrid columns={2} as="dl">
          <DefinationItem term="Platforms">
            {game.platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinationItem>
          <DefinationItem term="Publisher">
            {game.publishers.map((genre) => (
              <Text>{genre.name}</Text>
            ))}
          </DefinationItem>
          <DefinationItem term="MetaScore">
            <CriticScore score={game.metacritic} />
          </DefinationItem>
          <DefinationItem term="Genres">
            {game.genres.map((genre) => (
              <Text>{genre.name}</Text>
            ))}
          </DefinationItem>
        </SimpleGrid>
      </GridItem>
      <GameTrailer gameId={game.id} />
      <GameScreenShot gameId={game.id} />
    </SimpleGrid>
  )
}

export default GameDetailPage
