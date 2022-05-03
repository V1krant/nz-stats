import React from 'react'
import { Spinner, ChakraProvider } from '@chakra-ui/react'

export default function LoadingSpinner() {
  return (
    <ChakraProvider>
      <Spinner size='xl' speed="1.1s" />
    </ChakraProvider>
  )
}