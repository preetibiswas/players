import React from 'react'
import { Platform } from '../hooks/useGames'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,

    playstation5: FaPlaystation, // Keep the original key

    xbox360: FaXbox,
    xboxOne: FaXbox,
    nintendoswitch: SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    playstation4: MdPhoneIphone,
    playstation3: BsGlobe,
  }
  return (
    <HStack>
      {platforms.map((p) => (
        <Icon as={iconsMap[p.slug]} color="grey.500" key={p.id} />
      ))}
    </HStack>
  )
}

export default PlatformIconList
