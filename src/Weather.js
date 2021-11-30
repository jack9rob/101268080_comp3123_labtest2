import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Weather() {
    const [weatherData, setWeatherData] = useState({})
    const [day, setDay] = useState(0)
    const [iconUrl, setIconUrl] = useState('')

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    console.log('---render')

    useEffect(() => {
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=4bafd526282d774b01de6b6c26c40263&units=metric")
        .then(res => {
            console.log(res.data)
            setWeatherData(res.data)
            
            let d = new Date()
            setDay(d.getDay())

            //setIconUrl(`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
            console.log(iconUrl)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <div>
            {JSON.stringify(weatherData)}

        </div>
    )
}
