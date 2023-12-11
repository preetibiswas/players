import { Grid, Show, GridItem, Heading, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import useGameQueryStore from '../store'

const HomePage = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery)

  console.log(gameQuery)
  const heading = `${gameQuery.genre?.name || ''} ${
    gameQuery.platform?.name || ''
  }`
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'} padding={10}>
        <Box paddingLeft={2}>
          <Heading as="h1" marginY={5} fontSize="5xl">
            {heading}
          </Heading>
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default HomePage
