import React from 'react'
import './Forecast.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Forecast = ({data}) => {

    const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <Splide className="forecast__wrapper"
      options={{ 
        rewind: true,
        perPage: 4,
        pagination: true,
        arrows: false,
        loop: false,
        wheel: true,
        gap: 20,

        breakpoints: {
          768: {
            perPage: 3, 
          },
          640: {
            perPage: 2,
          },
          480: {
            prePage: 1.7,
          }
        }
      }}
    >
      {data.list.splice(0, 7).map((item, index) => (
        <SplideSlide className='forecast__item' key={index}>
            <p className='forecast__text'>{Math.round(item.main.temp)}°C</p>
            <img src={`icons/${item.weather[0].icon}.png`} alt="icon" className='forecast__icon'/>
            <p className='forecast__text'>{forecastDays[index]}</p>
        </SplideSlide>
      ))}
    </Splide>
  )
}


