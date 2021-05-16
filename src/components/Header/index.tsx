import { Flex } from "@chakra-ui/react";

export function Header(){
    return (
        <Flex
          as="header"
          justifyContent="center"
          alignItems="center"
          width="100%"
          py="4"
          bg="light.900"
        >
            <img src="Logo.svg" alt="logo" width="186.7" />
        </Flex>
    )
}