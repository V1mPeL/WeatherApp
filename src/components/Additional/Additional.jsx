import React from 'react'
import './Additional.scss'
import { BsGeoAlt, BsWind } from 'react-icons/bs'
import { WiHumidity } from 'react-icons/wi'
import Sunrize from '../../images/sunrize.svg'
import Sunset from '../../images/sunset.svg'
import {formatToLocalTime} from '../../api'

export const Additional = ({data}) => {
  
  function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  
  return (
    <div className='Additional'>
      <p className='additional__location'>
        <BsGeoAlt/>
        {`${data.name}, ${data.sys.country}`}
      </p>

      <div className='additional__sun'>

        <div className='additional__sun__item'>
          <p className='additional__sun__item-text'>Sunrise</p>
          <div className='additional__sun__item-card'>
            <p className='text'>{formatToLocalTime(data.sys.sunrise, data.timezone, "hh:mm a")}</p>
            <img src={Sunrize} alt="Sunrize" />
          </div>
        </div>

        <div className='additional__sun__item'>
          <p className='additional__sun__item-text'>Sunset</p>
          <div className='additional__sun__item-card'>
            <p className='text'>{formatToLocalTime(data.sys.sunset, data.timezone, "hh:mm a")}</p>
            <img src={Sunset} alt="Sunrize" />
          </div>
        </div>

      </div>

      <p className='line'></p>

      <div className='additional__info'>
        <div className='additional__info__item'>
          <p className='text'>Humidity <WiHumidity/></p>
          <p className='text bold'>{data.main.humidity}%</p>
        </div>
        <div className='additional__info__item'>
          <p className='text'>Wind speed</p>
          <p className='text bold'>{data.wind.speed} m/s<BsWind/></p>
        </div>
        <div className='additional__info__item'>
          <p className='text'>Wind direction</p>
          <p className='text bold'>{degToCompass(data.wind.deg)}</p>
        </div>
        <div className='additional__info__item'>
          <p className='text'>Wind gust</p>
          <p className='text bold'>{data.wind.gust}</p>
        </div>
      </div>

    </div>
  )
}
