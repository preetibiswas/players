import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={'5px'}>
      <Image src={logo} boxSize={'60px'} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
