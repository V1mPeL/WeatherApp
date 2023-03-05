import "./App.scss";
import { Additional } from "./components/Additional/Additional";
import { Main } from "./components/Main/Main";
import { Forecast } from "./components/Forecast/Forecast";
import { Spinner } from "./components/Spinner/Spinner"
import { Input } from "./components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";


function App() {
  const [userLocation, setUserLocation] = useState("");
  const [weatherData, setweatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [loading, setLoading] = useState(true);
  
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `${WEATHER_API_URL}/weather?q=${userLocation}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.data;

      const forecastres = await axios.get(
        `${WEATHER_API_URL}/forecast?q=${userLocation}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const fdata = await forecastres.data;

      setweatherData(data);
      setForecastData(fdata);
      setLoading(false);
      generateBackground(colorlist);
      console.log(weatherData);
      console.log(forecastData);
      console.log(backgroundcolor);
    } catch (err) {
      console.log(err);
      alert("Please enter a valid location");
    }
    
  };

  const spinner = loading ? <Spinner/> : null
  const content = !loading ? <View weatherData={weatherData} forecastData={forecastData}/> : spinner

  // Vars and functions before is used to change background color on each data fetching
  const colorlist = ["BlueGradient", "MediumSeaGreenGradient", "DarkTurquoiseGradient", "MediumOrchidGradient"];
  let backcolor = `App ${colorlist[0]}`;
  
  const generateBackground = (colorlist) => {
    let index = Math.floor(Math.random() * colorlist.length);
    setBackgroundColor(`App ${colorlist[index]}`)
  }

  const [backgroundcolor, setBackgroundColor] = useState(backcolor);

  return (
    <div className={backgroundcolor}>
      <Input
        text={(e) => setUserLocation(e.target.value)}
        submit={fetchData}
        func={fetchData}
      />
      {content}
    </div>
  );
}

const View = ({weatherData, forecastData}) => {
  return (
    <div className="info__wrapper">
      <div className="weather__wrapper">
        {weatherData && <Main data={weatherData}/>}
        {forecastData && <Forecast data={forecastData}/>}
      </div>
      {weatherData && <Additional data={weatherData}/>}
    </div>
  )
}


export default App;
