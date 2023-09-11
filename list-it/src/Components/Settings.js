import {React,useState} from 'react';
import {IconButton, Modal, ModalHeader,ModalBody,ModalOverlay,ModalCloseButton,Text, useDisclosure, ModalContent, Wrap, extendTheme, Button,  } from '@chakra-ui/react';
import {FaCog } from 'react-icons/fa';
import red from "../Themes/red.ts";
import green from '../Themes/green.ts';
import blue from '../Themes/blue.ts';


function SettingsButton ({theme}) {
  //modal operation
  const SettingsOverlay = () => (<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>)
  const { isOpen, onOpen, onClose } = useDisclosure()


  //theme management
  var colourlist = []
  colorThemes.forEach((colorTheme ,id) => {
    colourlist.push(
      <IconButton
        bg={colorTheme.colors.primary[200]}
        isRound={true}
        size={'xs'}
        onClick={() => activateColorTheme(colorTheme)}
        
    
    />)})

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
                <Wrap spacing={6} >
                  {colourlist}
                                  
                </Wrap>
              </ModalHeader>
              <ModalCloseButton />
            </ModalContent>
        </Modal>
    </>
  );
};

export default SettingsButton;




