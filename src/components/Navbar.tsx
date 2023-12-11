import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding={'5px'}>
      <Link to="/">
        <Image src={logo} boxSize={'60px'} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
