import React, { ReactNode, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react';
import { SlideItem } from './SlideItem';
import {apiContinents} from '../../services/continents'

SwiperCore.use([Navigation, Pagination]);

type ContinentProps = {
  title: string,
  description: string,
  image: string,
}

export function SlideContinent(){
  const [continents, setContinents] = useState<ReactNode>()

  useEffect(() => {
    function loadContinents(){
      let data = [];
      apiContinents.map(continent => {
        data.push(
          <SlideItem 
            key={continent.title}
            title={continent.title}
            description={continent.description}
            image={continent.image}
          />
        )
      })
      return data
    }
    setContinents(loadContinents)
  }, [])

  

  return (
    <Swiper
      slidesPerView={1}
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {continents}
    </Swiper>
  )
}