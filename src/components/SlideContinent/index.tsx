import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react';
import { api } from '../../services/api';
import { SlideItem } from './SlideItem';

SwiperCore.use([Navigation, Pagination]);

type ContinentProps = {
  title: string,
  description: string,
  image: string,
}

export function SlideContinent(){  
  const [continentsToSwiper, setContinentsToSwiper] = useState<ContinentProps[]>()

  useEffect(() => {
    async function getContinents(){
      const response = await api.get("continents")
      setContinentsToSwiper(response.data)
    }
    getContinents();
    console.log(continentsToSwiper)
  }, [])
    return (
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          scrollbar={{draggable: true}}
        >

          {
            continentsToSwiper.map(continent => {
              <SlideItem 
                key={continent.title}
                title={continent.title}
                description={continent.description}
                image={continent.image}
              />
            })
          }
          
        </Swiper>
    )
}