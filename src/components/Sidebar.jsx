import React from 'react';
import {Box, Flex, Icon, Stack, Text, VStack,} from '@chakra-ui/react';
import { FiHome,FiCompass,FiTrendingUp,FiStar,FiSettings} from 'react-icons/fi'

const Sidebar = () => {
    let sidebar_links=[
        {name:'Home',icon:FiHome},
        {name:'Trending',icon:FiTrendingUp},
        {name:'Explore',icon:FiCompass},
        {name:"Favourite",icon:FiStar},
        {name:'Settings',icon:FiSettings}
      ];

    return (
        <Stack  width='100%' height='740px' backgroundColor='lightblue'>
      <Box position='fixed' left='0px' padding='40px' height='100%' width='250px' color='black' backgroundColor='white' >
        <VStack justifyContent='space-between' height='400px'>
        <Text fontSize='25px' fontWeight='bold' >
          Logo
        </Text>
        {sidebar_links.map(({name,icon},i)=>{
         return <Flex key={i}  width='200px' alignContent='center'  align="center"
         p="4"
         mx="4"
         borderRadius="lg"
         role="group"
         cursor="pointer"
         _hover={{
           bg: 'cyan.400',
           color: 'white',
         }} >
            <Icon mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }} as={icon}></Icon>
            
            <Text textAlign='left' width='70px' >{name}</Text>
          </Flex>
        })}
        </VStack>
      </Box>
      </Stack>
    );
};

export default Sidebar;