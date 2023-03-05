import React from 'react'
import './Main.scss'
import { CiTempHigh } from 'react-icons/ci'
import { WiBarometer } from 'react-icons/wi'
import { BsClouds } from 'react-icons/bs'


export const Main = ({data}) => {

  // Also method can be replaced with regular expressions

  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  const suffix = getDayOfMonthSuffix(dayOfMonth);
  const monthName = currentDate.toLocaleString('en-US', { month: 'short' });
  const year = currentDate.getFullYear().toString().slice(-2);
  const formattedDate = `${dayOfMonth}${suffix} ${monthName} ${year}`;

  // Function to get the suffix for the day of the month
  function getDayOfMonthSuffix(dayOfMonth) {
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      return 'th';
    }
    switch (dayOfMonth % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  const timeOptions = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = currentDate.toLocaleDateString('en-US', timeOptions);

  return (
    <div className='Main'>
      <div className='current__weather'>
        <img src={`icons/${data.weather[0].icon}.png`} alt="Weather" className='weather__icon'/>
        <p className='weather__temperature'>{Math.round(data.main.temp)}°<span>C</span></p>
        <p className='weather__addons-text'>{data.weather[0].description}</p> 
        <p className='weather__date'>{formattedDate}</p>
        <p className='weather__date'>{formattedTime}</p>
        <div className='weather__addons'>
          <p className='weather__addons-text'><CiTempHigh className='addon__icon'/>Feels like: {Math.round(data.main.feels_like)}°C</p> <span>|</span>
          <p className='weather__addons-text'><WiBarometer className='addon__icon'/>Pressure: {data.main.pressure}</p> <span>|</span>
          <p className='weather__addons-text'><BsClouds className='addon__icon'/>Clouds: {data.clouds.all}%</p>
        </div>
      </div>
    </div>
  )
}
