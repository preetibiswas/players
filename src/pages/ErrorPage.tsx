import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <Box padding={5}>
      <Navbar />
      <Heading>OOOps....</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page dosnt exist'
          : 'AN unexpected token'}
      </Text>
    </Box>
  )
}

export default ErrorPage
