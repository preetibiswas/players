import React from 'react'
import { Switch, useColorMode, Text, HStack } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Switch
        size="lg"
        checked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />

      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
