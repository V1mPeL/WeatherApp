import React from 'react'
import './main.scss'
import { Input } from '../input/input';
import axios from 'axios';
import { WiHumidity } from 'react-icons/wi'
import { BsWind } from 'react-icons/bs'
import { useEffect, useState } from 'react';


export const Main = () => {

  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = new Date()
  let fullTime = day.toLocaleString();
  let dayName = days[day.getDay()]
  let monthName = month[day.getMonth()] 
  let date = `${dayName}, ${day.getDate()} ${monthName}`
  
  const [degrees, setDegrees] = useState(null)
  const [location, setLocation] = useState("")
  const [userLocation, setuserLocation] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [humidity, setHumidity] = useState(null)
  const [wind, setWind] = useState(null)
  const [gust, setGust] = useState(null)
  const [country, setCountry] = useState("")
  const [longitude, setLongitude] = useState("")
  const [latitude, setLatitude] = useState("")
  const [dataFetched, setDataFetched] = useState(false)
  
  const [switchToggled, setSwitchToggled] = useState(false)
  const [classToggled, setClassToggled] = useState(false)
  

  // Additional info
  const [pressure, setPressure] = useState("")
  const [pressuregr, setPressuregr] = useState("")
  const [feels, setFeels] = useState("")
  const [winddeg, setWinddeg] = useState("")
  const [clouds, setClouds] = useState("")

const fetchData = async (e) => {
  e.preventDefault()

  try{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${process.env.REACT_APP_API_KEY}&units=${switchToggled ? 'imperial' : 'metric'}`)
    const data = await res.data
  
    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setGust(data.wind.gust)
    setCountry(data.sys.country)
    setPressure(data.main.pressure)
    setPressuregr(data.main.grnd_level)
    setFeels(data.main.feels_like)
    setWinddeg(data.wind.deg)
    setClouds(data.clouds.all)
    setLongitude(data.coord.lon)
    setLatitude(data.coord.lat)
    
    setDataFetched(true)
  }catch(err){
    console.log(err)
    alert("Please enter a valid location")
  }

}

const defaultDataFetched = async () =>{
  if(!dataFetched){
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Sambir&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    const data = await res.data
    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setGust(data.wind.gust)
    setCountry(data.sys.country)
    setPressure(data.main.pressure)
    setPressuregr(data.main.grnd_level)
    setFeels(data.main.feels_like)
    setWinddeg(data.wind.deg)
    setClouds(data.clouds.all)
    setLongitude(data.coord.lon)
    setLatitude(data.coord.lat)


    console.log(data)
  }

}

useEffect(() => {
  defaultDataFetched()
}, [])

const ToggleSwitch = ()=> {
  switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
}

const ToggleClass = ()=> {
  classToggled ? setSwitchToggled(false) : setSwitchToggled(true);
}

function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

let dir = 
{ 
  N: "N", 
  NNE: "NNE", 
  NE: "NE", 
  ENE: "ENE", 
  E: "E", 
  ESE: "ESE", 
  SE: "SE", 
  SSE: "SSE", 
  S: "S", 
  SSW: "SSW", 
  SW: "SW", 
  WSW: "WSW", 
  W: "W", 
  WNW: "WNW", 
  NW: "NW", 
  NNW: "NNW"
};

function arrowClass(el) {
  if(degToCompass(winddeg) == el){
    return "arrows active"
  } else {
    return "arrows"
  }
}



  return (
    <>
      <div className='Main'>
      <div className="container">
        <div className="weather__wrapper">

          <div className="main__weather">
             <Input
              text={(e) => setuserLocation(e.target.value)}
              submit={fetchData}
              func={fetchData}
            /> 
            


              <h3 className="main__weather-location">Current weather in {location}, {country}</h3>
              <h3 className="main__weather-temperature">{Math.round(degrees)}??{switchToggled ? 'F' : 'C'}</h3> 
              <div className="main__weather-img">
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"  className='WeahterIcon'/>
                <h4 className="main__weather-type">{description}</h4>
              </div>
              <h3 className='main__weather-additional'><WiHumidity />Humidity: {humidity}%</h3>
              <h3 className='main__weather-additional'><BsWind />Wind speed: {wind} m/s</h3>

              <span className="main__weather-date">{date}</span>
              <div className="Changer">
                <button 
                  onClick={ToggleSwitch}
                >??{switchToggled ? 'F' : 'C'} </button>
                <span>Press and research to change</span>
              </div>
          </div>  
            
          <div className="additional__weather">
            <h4 className="additional__info">Air pressure: <span>{pressure} hPa</span></h4>
            <h4 className="additional__info">Ground pressure: <span>{pressuregr} hPa</span></h4>
            <h4 className="additional__info">Feels like: <span>{Math.round(feels)}??{switchToggled ? 'F' : 'C'}</span></h4>
            
          </div>

        </div>
      </div>
      </div>
   
      <div className="additional__bars-wrapper">
        <div className="container">
          <div className="additional__bars">
            <div className="additional__content__block">
              <h4 className="additional__info">Wind direction: <span>{degToCompass(winddeg)}</span> Speed: <span>{wind}</span> Gust: <span>{gust}</span></h4>
              
              <div class="compass">
                <div class="direction">
                  <p>{degToCompass(winddeg)}<span>{wind}KMH</span></p>
                </div>
                <div class={switchToggled ? 'arrow' : `arrow ${degToCompass(winddeg)}`}></div>
              </div>

            </div>

            <div className="additional__content__block">
            <h4 className="additional__info">Clouds: <span>{clouds}%</span></h4>
              <div className="bar">
                <div className="bar__colored" style={{"width" : `${clouds}%`}}></div>
              </div>
            </div>
            

            <div className="additional__content__block">
              <h4 className="additional__info">Latitude: <span>{latitude} </span>Longitute: <span>{longitude}</span></h4>
              <h4 className="additional__info">Full time: <span>{fullTime} </span></h4>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
