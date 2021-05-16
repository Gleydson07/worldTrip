import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Flex 
        mx="auto"
        width="100%"
        maxWidth={1440}
      >
        <Flex width="100%">
          <Flex 
            justifyContent="space-around"
            width="100%" 
            bgImage="url('banner-hero.png')"
            p="20"
            pb="1"
            bgRepeat="no-repeat"
          >
            <Box>            
              <Heading  
                color="light.400"
                fontSize={["20", "36"]}
                maxWidth="426"
                lineHeight="tall"
              >
                5 Continentes, infinitas possibilidades.
              </Heading>
              <Text  
                color="light.100"
                fontSize={["14", "20"]}
                mt="5"
                maxWidth="524"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>
            <Box minWidth="420">
              <Image src="Airplane.svg" alt="arplane"/>
            </Box>
          </Flex>
          

        </Flex>

      </Flex>
    </>
  )
}
