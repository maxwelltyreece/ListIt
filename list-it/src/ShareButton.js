import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaShareSquare } from 'react-icons/fa';

export const ShareButton = props => {

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Generate a sharable URL`}
      variant="ghost"
      colorScheme='teal'
      marginLeft="2"
      icon={FaShareSquare}
      {...props}
    />
  );
};
