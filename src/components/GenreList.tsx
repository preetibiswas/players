import React from 'react'
import useGenra from '../hooks/useGenra'
import useData from '../hooks/useData'
import { Genra } from '../hooks/useGenra'
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from '@chakra-ui/react'
interface Props {
  onSelectedGenre: (genre: Genra) => void
  selectedGenra: Genra | null
}

const GenreList = ({ onSelectedGenre, selectedGenra }: Props) => {
  const { data: genras, error, isLoading } = useData<Genra>('/genres')
  if (isLoading) return <Spinner />
  return (
    <List>
      {genras.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize={'32px'}
              src={genre.image_background}
              borderRadius={8}
            />
            <Button
              fontSize={genre.id === selectedGenra.id ? 'lg' : 'normal'}
              variant="link"
              onClick={() => {
                console.log(genre)
                onSelectedGenre(genre)
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
