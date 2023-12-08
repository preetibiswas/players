import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (txt: string | null) => void
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding={'5px'}>
      <Image src={logo} boxSize={'60px'} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
