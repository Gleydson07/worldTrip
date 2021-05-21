import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

export function Header(){
    return (
        <>
            <Flex
                as="header"
                justifyContent="center"
                alignItems="center"
                maxWidth={1440}
                mx="auto"
                height={["50px", "24"]}
                py="4"
                bg="light.900"
                position="relative"
            >
                <Link
                    href="/"
                    position="absolute"
                    left={["5","20"]}
                    _hover={{color: "yellow.900"}}
                >
                    <Icon 
                        as={FiChevronLeft}
                        fontSize="2xl"
                    />
                </Link>
                <Image src="/logo.svg" alt="logo" width="186.7" />
            </Flex>

        </>
    )
}