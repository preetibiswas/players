// import { Box, Flex, Grid, GridItem, Heading, Show } from '@chakra-ui/react'
// import Navbar from './components/Navbar'
// import GameGrid from './components/GameGrid'
// import GenreList from './components/GenreList'

// import { Genra } from './hooks/useGenra'
// import PlatformSelector from './components/PlatformSelector'
// import { Platform } from './hooks/usePlatform'
// import SortSelector from './components/SortSelector'
// import useGameQueryStore from './store'

// export interface GameQuery {
//   genre: Genra | null
//   platform: Platform | null
//   order: string | null
//   searchText: string | null
// }

// function App() {
//   // const [selectedGenra, setSelectedGenra] = useState<Genra | null>(null)

//   // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
//   //   null,
//   // )
//   // const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

//   // const [searchText, setSearchText] = useState<string | null>(null)

//   // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
//   const gameQuery = useGameQueryStore((s) => s.gameQuery)

//   console.log(gameQuery)
//   const heading = `${gameQuery.genre?.name || ''} ${
//     gameQuery.platform?.name || ''
//   }`

//   return (
//     <Grid
//       templateAreas={{
//         base: `"main"`,
//         lg: `"aside main"`,
//       }}
//       templateColumns={{
//         base: '1fr',
//         lg: '200px 1fr',
//       }}
//     >

//       <Show above="lg">
//         <GridItem area={'aside'} paddingX={5}>
//           <GenreList />
//         </GridItem>
//       </Show>
//       <GridItem area={'main'} padding={10}>
//         <Box paddingLeft={2}>
//           <Heading as="h1" marginY={5} fontSize="5xl">
//             {heading}
//           </Heading>
//           <Flex marginBottom={5}>
//             <Box marginRight={5}>
//               <PlatformSelector />
//             </Box>
//             <SortSelector />
//           </Flex>
//         </Box>

//         <GameGrid />
//       </GridItem>
//     </Grid>
//   )
// }

// export default App
