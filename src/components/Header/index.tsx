import { Button, Flex, Icon, Image } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

export function Header(){
    return (
        <Flex
          as="header"
          justifyContent="center"
          alignItems="center"
          maxWidth={1440}
          mx="auto"
          height={["50px", "24"]}
          py="4"
          bg="light.900"
        >

            <Image src="/logo.svg" alt="logo" width="186.7" />
        </Flex>
    )
}