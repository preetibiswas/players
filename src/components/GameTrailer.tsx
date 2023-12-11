import React from 'react'
import useTraiers from '../hooks/useTraiers'

interface Props {
  gameId: number
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTraiers(gameId)
  console.log(data)
  const first = data?.results[0]

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]}
      controls
    />
  )
}

export default GameTrailer
