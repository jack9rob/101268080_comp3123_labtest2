import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Weather() {
    const [weatherData, setWeatherData] = useState({})
    const [day, setDay] = useState('')
    const [dayString, setDayString] = useState('')
    const [iconUrl, setIconUrl] = useState('')

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


    useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=4bafd526282d774b01de6b6c26c40263&units=metric")
        .then(res => {
            console.log(res.data)
            setWeatherData(res.data)
            
            let d = new Date()
            setDay(days[d.getDay()])
            setDayString(d.toLocaleDateString('en-us', { weekday:"long", day:'numeric'}))

            setIconUrl(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
            console.log(iconUrl)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div class="mt-5 container border border-primary d-flex justify-content-center align-items-center">
           
           <div class="container">
                <div class="d-flex justify-content-center">
                        <h1>{day}</h1>
                </div>
                <div class="d-flex justify-content-center">
                        <h5 class="text-muted">{weatherData.name}, {weatherData.sys.country}</h5>
                </div>
                <hr/>
                <div class="row">
                    <h2 class="col-1">{weatherData.weather[0].description}</h2>
                </div>
                <div class="row align-items-center">
                    <div class='d-inline col-2'>
                        <h1> <img src={iconUrl} alt={weatherData.weather[0].description}/></h1>
                    </div>
                    <div class="col-4">
                        <h2>{weatherData.main.temp}&#176;C</h2>
                        <h6 class="text-muted">Feels Like: {weatherData.main.feels_like} &#176;C</h6>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <h6 class="col-2">High: {weatherData.main.temp_max}&#176;C</h6>
                    <h6 class="col-2">Low: {weatherData.main.temp_min}&#176;C</h6>
                </div>
                <div class="row">
                    <h6 class='col-1 text-muted'>Pressure:</h6>
                    <h6 class="col-2 text-muted">{weatherData.main.pressure} Pa</h6>
                </div>
                <div class="row">
                    <h6 class='col-1 text-muted'>Humidity:</h6>
                    <h6 class="col-3 text-muted">{weatherData.main.humidity}</h6>
                </div>
    
            </div>
            
            
        </div>
    )
}
