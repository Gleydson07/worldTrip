import React from 'react';
import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import {travelTypes} from '../../services/continents'
import { TravelItem } from './TravelItem';

export function TravelTypes(){
    return (        
        <SimpleGrid 
          my="16"
          mx="auto"
          mb={["5", "20"]}
          columns={[2, 5]}
          gap={["10", "20"]}
        >
            {travelTypes.map(travel => {
                return (
                    <TravelItem 
                        key={travel.title}
                        image={travel.image}
                        title={travel.title}
                    />
                )
            })}
          
        </SimpleGrid>
    )
}