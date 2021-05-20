import React from 'react';
import { Flex, GridItem, Heading, Icon, Image, useBreakpointValue } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa'

interface TravelItemProps {
    image: string;
    title: string;
}

export function TravelItem({image, title}: TravelItemProps){
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false
  })
    return (
        <Flex        
          direction={["row", "column"]}
          align="center"
          justify="center"
          textAlign="center"
        >        
          {!isWideVersion ? (
              <>
                <Image src={image}/>
                <Heading
                  fontSize={["18px", "2xl"]}
                  fontWeight={["medium", "semibold"]}
                  color="dark.700" 
                  my={["auto", "6"]}
                >
                  {title}
                </Heading>
              </>
            ) : (
              <>
                <Icon as={FaCircle} color="yellow.900" mr="5px"/>
                <Heading
                  fontSize={["18px", "2xl"]}
                  fontWeight={["medium", "semibold"]}
                  color="dark.700" 
                  my={["auto", "6"]}
                >
                  {title}
                </Heading>
              </>
            )
          }       
        </Flex>
    );
}