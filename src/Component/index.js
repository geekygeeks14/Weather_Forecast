import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
const API_Key ="496461f15dd1de9759aa30ef5c1233c7"

const Index=()=>{
    const [city, setCity] = useState("Delhi")
    const [searchData, setSearchData] = useState("")
    const [date, setDate] = useState("")
    const [loading, setLoading] = useState(false); 
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    useEffect(()=>{
      value()
      const d= new Date()
      setDate(d.getDay())
    },[])

    const value= async()=>{
      setLoading(true); 
      try{
        const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`).then((res)=>{
          return res.json()
      })
      setSearchData(data.main)
      }catch(error){
        setSearchData(null);
      }finally {
        setLoading(false); // Stop loading when API call completes
      }
    
    }

    const handleWeather=(e)=>{
      e.preventDefault()
      value()
    }

    const handleChange=(e)=>{
        setCity(e.target.value)
    }

    return(
        <>
        <div className='container'>
            <div className='card'>
            <div className='heading'>
                <h1>Weather Forecast</h1>
            </div>
            <form onSubmit={handleWeather}>
            <div className='search-card'>
                <div className='serach-box'>
                    <input placeholder='Enter city name' onChange={handleChange}/>
                </div>
                <div className='search-btn'>
                    <button className='btn' type="submit">Get Weather</button>
                </div>
              </div>
            </form>
            </div>
            <div className='wcard' >
            {loading ? (
            <h2>Loading...</h2> // Show loader while data is being fetched
          ) : (!!searchData ? (
              <WeatherCard data={searchData} date={weekday[date]} city={city} />
            ) : (
              <h1>Data not found</h1>
            )
          )}
                </div>
            </div>
        </>
    )
}
export default Index;