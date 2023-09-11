import { Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ShareButton } from './ShareButton';
import SettingsButton from './Settings';


function NavBar({theme},{function()}) {
    return(
        <Flex>
            <Spacer/>
            <SettingsButton theme={theme}/>
            <ColorModeSwitcher/>
            <ShareButton/>
        </Flex>
    );
}

export default NavBar