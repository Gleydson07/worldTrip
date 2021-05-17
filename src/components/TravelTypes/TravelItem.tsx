import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

interface TravelItemProps {
    image: string;
    title: string;
}

export function TravelItem({image, title}: TravelItemProps){
    return (
        <Box align="center" key={title}>
            <Image src={image}/>
            <Heading
              mt="6"
              fontSize="2xl"
              fontWeight="semibold"
              color="dark.700"         
            >
              {title}
            </Heading>
        </Box>  
    );
}