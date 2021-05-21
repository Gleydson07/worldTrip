import { Box, Image, Text } from "@chakra-ui/react";

interface InformationProps {
    quantity: number;
    description: string;
    image?: string;
}

export function Information({quantity, description, image}: InformationProps){
    return(
        <Box>
            <Text as="span"           
                fontSize={["2xl","5xl"]}
                fontWeight="semibold"
                color="yellow.900"
            >
                {quantity}
            </Text>
            <Text
                fontSize={["lg","2xl"]}
                color="dark.700"
                fontWeight={["normal", "semibold"]}
            >      
                {description}  
            </Text>
        </Box>
    )
}