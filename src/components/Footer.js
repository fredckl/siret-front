import { Box } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo';

const Footer = () => {
  return (
    <Box bgColor="whiteAlpha.800" position="fixed" right="0" bottom="0" left="0" width="100%">
      <Box textAlign="center" d="flex" justifyContent="center" height="10" alignItems="center" borderTop="1px" borderTopColor="gray.100">
        <Logo/> &nbsp; tout droit réservé
      </Box>
    </Box>
  )
}

export default Footer
