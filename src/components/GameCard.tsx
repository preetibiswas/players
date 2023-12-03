import {
  VStack,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  HStack,
} from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'

interface Props {
  games: Game
}

const GameCard = ({ games }: Props) => {
  return (
    <Card overflow={'hidden'} borderRadius={10}>
      <Image src={games.background_image} />
      <CardBody>
        <Heading size="md">{games.name}</Heading>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack>
          <Text>{games.rating_top}</Text>
          <Text>{games.metacritic}</Text>
        </HStack>
      </CardFooter>
    </Card>
  )
}

export default GameCard
