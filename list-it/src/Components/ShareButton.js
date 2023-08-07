import React from 'react';
import {IconButton } from '@chakra-ui/react';
import {FaShareSquare } from 'react-icons/fa';

export const ShareButton = props => {

  return (
    <IconButton
      size="lg"  
      fontSize="xl"
      aria-label={`Generates sharable URL`}
      variant="ghost"
      color="current"
      bg="button"
      marginLeft="2"
      icon={<FaShareSquare />}
      {...props}
    />
  );
};
