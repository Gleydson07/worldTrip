import { Flex, Heading, Link } from '@chakra-ui/layout';
import React, { ReactNode, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import {apiContinents} from '../../services/continents'

SwiperCore.use([Navigation, Pagination, A11y]);

type ContinentProps = {
  title: string,
  description: string,
  image: string,
}

export function SlideContinent(){
  const [continents, setContinents] = useState<ReactNode[]>()
  
  useEffect(() => {
    let data = [];
    function loadContinents(){
      apiContinents.map(continent => {
        data.push(
          <SwiperSlide key={continent.title} >
            <Link href="/home" width="100%" minHeight="450px">
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
                <Heading fontSize="3rem" color="light.text">
                  {continent.title}
                </Heading>            
                <Heading mt="4" fontSize="1.5rem" color="light.text">
                  {continent.description}
                </Heading>
              </Flex>
            </Link>
      </SwiperSlide>
        )
      })
      return data
    }
    setContinents(loadContinents)
  }, [])

  

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {continents}
    </Swiper>
  )
}