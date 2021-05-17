import { Box,  Divider,  Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { SlideContinent } from "../components/SlideContinent";
import { TravelTypes } from "../components/TravelTypes";

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

        <TravelTypes />

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
        
        <Box mb="10" width="100%" maxWidth="1240px" height="450px" mx="auto">
          <SlideContinent/>        
        </Box>

      </Flex>
          

    </>
  )
}
