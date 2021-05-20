import React from 'react';
import { Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { TravelItem } from './TravelItem';
import {travelTypes} from '../../../staticContinents'

interface TravelTypesProps {
    image: string;
    title: string;
}

export function TravelTypes(){
    
    const isWideVersion = useBreakpointValue({
        base: true,
        lg: false
    })
    return (        
        <Grid 
          my="16"
          mx="auto"
          mb={["5", "10"]}
          templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
          gap={["10", "20"]}
        >
            {travelTypes?.map((travel, index) => {
                return (
                    <GridItem 
                        key={travel.title}
                        colSpan={(isWideVersion && index===travelTypes.length-1) ? 2 : 0}
                    >
                        <TravelItem 
                            key={travel.title}
                            image={travel.image}
                            title={travel.title}
                        />
                    </GridItem>
                )
            })}
          
        </Grid>
    )
}