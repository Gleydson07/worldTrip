import { Image } from '@chakra-ui/image';
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
      <SwiperSlide key={title} tag="li">
          {/* <Image
            height={[250, 450]}
            width="100%"
            src={image} 
          /> */}
            <Flex
              height={[250, 450]}
              justify="center"
              align="center"
              direction="column"
              color="light.400"
              textShadow="1px 1px #00000055"
              objectFit="cover"
              bgImage={`url(${image})`}
            >
              <Heading fontSize="3rem" color="light.text">
                {title}
              </Heading>
              
              <Heading mt="4" fontSize="1.5rem" color="light.text">
                {description}
              </Heading>
            </Flex>
          </SwiperSlide>
    )
}