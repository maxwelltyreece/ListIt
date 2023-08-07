import React from 'react';
import {IconButton, Modal, ModalHeader,ModalBody,ModalOverlay,ModalCloseButton,Text, useDisclosure, ModalContent, Wrap  } from '@chakra-ui/react';
import {FaCog } from 'react-icons/fa';

export const SettingsButton = props => {
    const SettingsOverlay = () => (
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modalColours = ["yellow","orange","red","pink","purple","blue","teal","green",]

    const colourButtons = []

    modalColours.forEach((data) => {colourButtons.push(<IconButton 
      colorScheme={data} 
      isRound={true} 
      size={"xs"}/>)})

  return (
    <>
        <IconButton
        size="lg"  
        fontSize="xl"
        aria-label={`Open Settings`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={() => {
            onOpen()
          }}
        icon={<FaCog/>}
        />

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <SettingsOverlay/>
            <ModalContent>
                <ModalHeader>
                  <Wrap spacing={6}>
                  {colourButtons} 
                  </Wrap>
                    

                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                              
                  <Text>Custom backdrop filters!</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
  );
};


