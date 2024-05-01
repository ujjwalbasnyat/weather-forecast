import { useState } from 'react'
import Search from './components/Search.jsx'
import CurrentWeather from "./components/currentWeather.jsx";
import{weather_api_url, my_api_key} from "./api.js";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null)
  const[forecast,setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
   const[lat, lon] = searchData.value.split(" ");
   console.log(searchData.value.split(" "))
      const currentWeatherfetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${my_api_key}&units=metric`);
      const forecastfetch = fetch(`${weather_api_url}/weather?lat=${lat}&lon=${lon}&appid=${my_api_key}&units=metric`);

      Promise.all([currentWeatherfetch, forecastfetch])
      .then(async (response)=>{
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentWeather({ city: searchData.label , ...weatherResponse});
        setforecast({ city: searchData.label, ...forecastResponse});
      }).catch((err)=>console.log("Error", err))
  }
  console.log(currentWeather)
  console.log(forecast)


  return (
    <div className={`max-w-full my-[10px] mx-auto`}>
      <Search
      onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data = {currentWeather}/>}
    </div>
  )
}

export default App