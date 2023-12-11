import {
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  HStack,
} from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from '../components/Emoji'
import { Link } from 'react-router-dom'

interface Props {
  games: Game
}

const GameCard = ({ games }: Props) => {
  return (
    <Card
      overflow={'hidden'}
      borderRadius={10}
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in',
      }}
    >
      <Image src={games.background_image} />
      <CardBody>
        <HStack justifyContent={'space-between'} paddingY={2}>
          <PlatformIconList
            platforms={games.platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
        <Link to={'/games/' + games.slug}>{games.name}</Link>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack>
          <Emoji rating={games.rating_top} />
        </HStack>
      </CardFooter>
    </Card>
  )
}

export default GameCard
