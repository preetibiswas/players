import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { FaSortDown } from 'react-icons/fa'
import usePlatform from '../hooks/usePlatform'

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform()
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaSortDown />}>
        Platform
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id}>{p.name}</MenuItem>
        ))}

        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
