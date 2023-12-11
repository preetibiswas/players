import React, { useState } from 'react'
import { Button, Text } from '@chakra-ui/react'

interface Props {
  children: string
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const limit = 300
  if (children.length <= limit) return <Text>{children}</Text>
  if (!children) return null
  const Summary = expanded ? children : children.substring(0, limit) + '...'

  return (
    <Text>
      {Summary}{' '}
      <Button
        colorScheme="yellow"
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'show Less' : 'Read More'}
      </Button>
    </Text>
  )
}

export default ExpandableText
