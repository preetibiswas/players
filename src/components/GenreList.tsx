import useGenra from '../hooks/useGenra'
import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from '@chakra-ui/react'
import useGameQueryStore from '../store'

const GenreList = () => {
  const setGenre = useGameQueryStore((s) => s.setGenre)
  const selectedGenra = useGameQueryStore((s) => s.gameQuery.genre)

  const { data: genras, isLoading } = useGenra()
  if (isLoading) return <Spinner />
  return (
    <List>
      <Heading fontSize="2xl" marginBottom={3}>
        Genras
      </Heading>
      {genras?.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              boxSize={'32px'}
              src={genre.image_background}
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              textAlign="left"
              whiteSpace="normal"
              fontSize={genre?.id === selectedGenra?.id ? 'lg' : 'normal'}
              variant="link"
              onClick={() => {
                console.log(genre)
                setGenre(genre)
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
