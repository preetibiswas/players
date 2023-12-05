import React from 'react'
import {
  Skeleton,
  Card,
  CardBody,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
