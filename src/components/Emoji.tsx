import bulleye from '../assets/bulls-eye.webp'
import thumb from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import React from 'react'
import { Image, ImageProps } from '@chakra-ui/react'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '35px' },
    4: { src: thumb, alt: 'thuumb', boxSize: '35px' },
    5: { src: bulleye, alt: 'eye', boxSize: '35px' },
  }
  return <Image {...emojiMap[rating]} />
}

export default Emoji
