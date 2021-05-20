import { Box,  Divider,  Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { SlideContinent } from "../components/SlideContinent";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <>
      <Header />
      <Flex 
        mx="auto"
        width="100%"
        maxWidth={[450, 1440]}
        direction="column"
        >
        <Flex 
          width="100%" 
          minHeight={["163px", "100%"]}
          px={["5","12"]}
          py={["10","20"]}
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
              fontSize={["14px", "xl"]}
              fontWeight="normal"
              lineHeight="7"
              mt={["8px","5"]}
            >
              Chegou a hora de tirar do papel a viagem que você {!isWideVersion && <br/>} 
              sempre sonhou.
            </Text>
          </Box>
          {!isWideVersion && (
            <Box minWidth="420">
              <Image src="Airplane.svg" alt="arplane"/>
            </Box>
          )}
        </Flex>

        <TravelTypes />

        <Divider
          width="90px"
          my={["8","16"]}
          mx="auto"
          borderColor="dark.700"
        />

        <Heading
          fontSize={["20px", "4xl"]}
          fontWeight="medium"
          color="dark.700"
          lineHeight="tall"
          align="center"
          mb={["7","14"]}
        >
          Vamos nessa? {<br/>}
          Então escolha seu continente
        </Heading>
        
        <Box width="100%" maxWidth="1240px" height="300px" mx="auto">
          <SlideContinent/>        
        </Box>

      </Flex>          

    </>
  )
}