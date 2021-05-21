import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface MajorCountries {
    image: string;
    capital: string;
    country: string;
    flag: string;
}

export function CardCity({image, capital, country, flag}: MajorCountries){
    return (
        <Flex 
            direction="column"
            borderRadius="0.25rem"
            border="1px solid" 
            borderColor="yellow.50"
            height="280px"
        >
            <Image 
                src={image}
                height="175px"
                minHeight="175px"
                borderRadius="0.25rem"
            />
            <Flex
                justify="space-around"
                align="center" 
                height="100%" 
                mx="4"        
            >
                <Box>
                    <Heading
                        fontFamily="card"
                        fontWeight="semibold"
                        fontSize="xl"
                        color="dark.700"
                        py="0.5rem"
                    >
                        {capital}
                    </Heading>
                    <Text
                        color="dark.500"
                    >
                        {country}
                    </Text>
                </Box>
                <Image 
                    src={flag}
                    borderRadius="50%"
                    width="30px"
                    height="30px"
                />
            </Flex>
        </Flex>
    )
}