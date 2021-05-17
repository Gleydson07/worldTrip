import { Box,  Divider,  Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {api} from "../services/api";
import { Header } from "../components/Header";
import { SlideContinent } from "../components/SlideContinent";

export default function Home() {

  return (
    <>
      <Header />
      <Flex 
        mx="auto"
        width="100%"
        maxWidth={1440}
        direction="column"
        >
        <Flex 
          width="100%" 
          px="12"
          py="20"
          pb="0"
          justifyContent="space-around"
          bgImage="url('banner-hero.png')"
          bgRepeat="no-repeat"
        >
          <Box>
            <Heading  
              color="light.400"
              fontSize={["xl", "4xl"]}
              fontWeight="medium"
              lineHeight="base"
            >
              5 Continentes, {<br/>} 
              infinitas possibilidades.
            </Heading>
            <Text  
              color="light.100"
              fontSize={["lg", "xl"]}
              lineHeight="7"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você {<br/>} 
              sempre sonhou.
            </Text>
          </Box>
          <Box minWidth="420">
            <Image src="Airplane.svg" alt="arplane"/>
          </Box>
        </Flex>

        <Grid 
          my="20"
          mx="auto"
          templateColumns="repeat(5, 1fr)"
          gap="20"
        >            
          <Box 
            align="center"
          >
            <Image src="drink.svg"/>
            <Heading
              mt="6"
              fontSize="2xl"
              fontWeight="semibold"
              color="dark.700"         
            >
              vida noturna
            </Heading>
          </Box>  
          <Box 
            align="center"
          >
            <Image src="surf.svg"/>
            <Heading
              mt="6"
              fontSize="2xl"
              fontWeight="semibold"
              color="dark.700"         
            >
              praia
            </Heading>
          </Box>  
          <Box 
            align="center"
          >
            <Image src="building.svg"/>
            <Heading
              mt="6"
              fontSize="2xl"
              fontWeight="semibold"
              color="dark.700"         
            >
              moderno
            </Heading>
          </Box>  
          <Box 
            align="center"
          >
            <Image src="museum.svg"/>
            <Heading
              mt="6"
              fontSize="2xl"
              fontWeight="semibold"
              color="dark.700"         
            >
              clássico
            </Heading>
          </Box>  
          <Box 
          align="center"
        >
          <Image src="earth.svg"/>
          <Heading
            mt="6"
            fontSize="2xl"
            fontWeight="semibold"
            color="dark.700"         
          >
            e mais...
          </Heading>
        </Box> 
        </Grid>

        <Divider
          width="90px"
          mt="20"
          mx="auto"
          mb="3.25rem"
          borderWidth="2px"
          borderColor="dark.700"
        />

        <Heading
          fontSize="4xl"
          fontWeight="medium"
          color="dark.700"
          lineHeight="tall"
          align="center"
          my="14"
        >
          Vamos nessa? {<br/>}
          Então escolha seu continente
        </Heading>
        
        <SlideContinent/>        

      </Flex>
          

    </>
  )
}
