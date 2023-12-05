import React from 'react'
import { Badge } from '@chakra-ui/react'

interface Props {
  score: string
}

const CriticScore = ({ score }: Props) => {
  return <Badge colorScheme={score < 90 ? 'red' : 'purple'}>{score}</Badge>
}

export default CriticScore
