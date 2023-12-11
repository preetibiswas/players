import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { FaSortDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
  const selectedPlatform = useGameQueryStore((s) => s.gameQuery.platform)
  const setPlatform = useGameQueryStore((s) => s.setPlatform)
  const { data, error } = usePlatform()
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaSortDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.map((p) => (
          <MenuItem key={p.id} onClick={() => setPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
