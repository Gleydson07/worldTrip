import React from 'react';
import { Grid } from '@chakra-ui/react';
import {travelTypes} from '../../services/continents'
import { TravelItem } from './TravelItem';

export function TravelTypes(){
    return (
        <Grid 
          my="20"
          mx="auto"
          templateColumns="repeat(5, 1fr)"
          gap="20"
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
          
        </Grid>
    )
}