import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

interface ContinentProps {
    title: string,
    description: string,
    image: string
}

export function SlideItem({title, description, image}: ContinentProps){
    return (
        <SwiperSlide>
            <Flex
                height={[250, 450]}
                justify="center"
                align="center"
                direction="column"
                position="relative"
                color="light.400"
                textShadow="1px 1px #00000055"
                _before={{
                    backgroundImage: `url(${image})`,
                    content: '""',
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: -1
                }}
            >
              <Heading fontSize="3rem" color="light.text">
                ${title}
              </Heading>
              
              <Heading mt="4" fontSize="1.5rem" color="light.text">
                ${description}
              </Heading>
            </Flex>
          </SwiperSlide>
    )
}