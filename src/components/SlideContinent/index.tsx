import React, { ReactNode, useEffect, useState } from 'react';
import { Flex, Heading, Link } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import {continents} from '../../../staticContinents'

SwiperCore.use([Navigation, Pagination, A11y]);

interface continentProps{
  image: string;
  continent: string;
  description: string;
}

export function SlideContinent(){
  const [continentsElement, setContinentsElement] = useState<ReactNode[]>([]);

  useEffect(() => {

    let data = [];
    continents?.map((continent: continentProps) => {
        data.push(
        <SwiperSlide key={continent.continent} >
          <Link 
            href={`/continents/${continent.continent}`}
            width="100%" 
            minHeight="450px" 
            _hover={{textDecoration:"none"}}
          >
            <Flex
              height={[250, 450]}
              width="100%"
              direction="column"
              justify="center"
              align="center"
              bgImage={`url(${continent.image})`}
              bgSize="cover"
              bgPosition="center"
              textShadow="1px 1px #00000055"
              color="light.400"
            >
              <Heading fontSize={["2xl","5xl"]} fontWeight="bold" color="light.text" textAlign="center">
                {continent.continent}
              </Heading>            
              <Heading mt="4" fontSize={["sm","2xl"]} fontWeight="bold" color="light.text" textAlign="center">
                {continent.description}
              </Heading>
            </Flex>
          </Link>
        </SwiperSlide>
        )
      }
    )
    setContinentsElement(data);
  }, [])

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {continentsElement}
    </Swiper>
  )
}