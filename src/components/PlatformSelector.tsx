import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { FaSortDown } from 'react-icons/fa'
import usePlatform, { Platform } from '../hooks/usePlatform'

interface Props {
  onSelectedPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform()
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaSortDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
