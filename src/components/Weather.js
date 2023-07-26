import React, {useEffect, useState} from 'react';
import axios from "axios";

const API_KEY = `ce309858c9580a2f86ac0e0f45374afb`

const Weather = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [temp, setTemp] = useState()
  const [name, setName] = useState()
  const [icon, setIcon] = useState(null);

  const UNIT = 'metric';
  const sucCb = (pos) => {
    setLat(pos.coords.latitude)
    setLon(pos.coords.longitude)
  };
  const getLatLong = () => {
    if (navigator.geolocation) {
      let pos = navigator.geolocation.getCurrentPosition(sucCb);
      console.log(pos);
    }
  }

  //fix toggle conversion to support revert...
  const toggleUnit = (temp) => {
    //(°C x 9/5) + 32
    setTemp(temp * (9/5) + 32);
    return;
  }

  const fetchWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNIT}&appid=${API_KEY}`).then((response) =>{
      console.log(response.data);
      setTemp(response.data.main.temp);
      setName(response.data.name);
      setIcon(response.data.weather[0].icon);
    })
  }
  // const fetchIcon = () => {
  //   axios.get(`http://openweathermap.org/img/wn/${icon}@2x.png`).then((response) =>{
  //     console.log(response.data);
  //     setIcon()
  //   })
  //
  // }
  //http://openweathermap.org/img/wn/10d@2x.png
  //page load
  useEffect(() => {
    getLatLong();
    fetchWeather();
  }, [])

  return (
    <div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
           id='weatherIcon'
           alt={'description of icon required'}
      >
      </img>
      {name}
      {temp}
      <button onClick={fetchWeather}>
        Get Weather
      </button>
      <button onClick={()=>toggleUnit(temp)}>
        C/F
      </button>
    </div>
  );

}
export default Weather;