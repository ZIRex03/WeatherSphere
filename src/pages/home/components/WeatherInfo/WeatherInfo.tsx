import React from 'react'
import './WeatherInfo.module.scss'
import {GLobalSvgSelector} from '../../../../icons/Global/GLobalSvgSelector'
import { BsFillGeoAltFill } from "react-icons/bs";
import { CiSun } from "react-icons/ci";
import ForecastItem from '../ForecastItem/ForecastItem';
import WeatherStatusSelector from '../../../../icons/Global/WeatherStatusSelector';

interface Props {
    weather: any,
    nowTime: any,
    forecast:any,

}

//test values
// const bimForecast =
// [
//         {
//             "dt": 1726671600,
//             "main": {
//                 "temp": 23.47,
//                 "feels_like": 22.71,
//                 "temp_min": 22.86,
//                 "temp_max": 23.47,
//                 "pressure": 1031,
//                 "sea_level": 1031,
//                 "grnd_level": 1012,
//                 "humidity": 32,
//                 "temp_kf": 0.61
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "ясно",
//                     "icon": "01d"
//                 }
//             ],
//             "clouds": {
//                 "all": 7
//             },
//             "wind": {
//                 "speed": 1.03,
//                 "deg": 3,
//                 "gust": 1.28
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2024-09-18 15:00:00"
//         },
//         {
//             "dt": 1726682400,
//             "main": {
//                 "temp": 20.29,
//                 "feels_like": 19.24,
//                 "temp_min": 20.29,
//                 "temp_max": 20.29,
//                 "pressure": 1031,
//                 "sea_level": 1031,
//                 "grnd_level": 1012,
//                 "humidity": 33,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "ясно",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 9
//             },
//             "wind": {
//                 "speed": 0.95,
//                 "deg": 25,
//                 "gust": 0.96
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2024-09-18 18:00:00"
//         },
//         {
//             "dt": 1726693200,
//             "main": {
//                 "temp": 18.25,
//                 "feels_like": 17.1,
//                 "temp_min": 18.25,
//                 "temp_max": 18.25,
//                 "pressure": 1031,
//                 "sea_level": 1031,
//                 "grnd_level": 1012,
//                 "humidity": 37,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "ясно",
//                     "icon": "01n"
//                 }
//             ],
//             "clouds": {
//                 "all": 5
//             },
//             "wind": {
//                 "speed": 0.96,
//                 "deg": 271,
//                 "gust": 0.93
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "n"
//             },
//             "dt_txt": "2024-09-18 21:00:00"
//         }
// ]

const currentForecast:any = [];

const month = new Map([
    [0, 'Янв'],
    [1, 'Фев'],
    [2, 'Март'],
    [3, 'Апр'],
    [4, 'Май'],
    [5, 'Июнь'],
    [6, 'Июль'],
    [7, 'Авг'],
    [8, 'Сен'],
    [9, 'Окт'],
    [10, 'Ноя'],
    [11, 'Дек'],
  ])

const day = new Map([
    [0, 'Воскресенье'],
    [1, 'Понедельник'],
    [2, 'Вторник'],
    [3, 'Среда'],
    [4, 'Четверг'],
    [5, 'Пятница'],
    [6, 'Суббота'],

])

let windDirection = '';


function WeatherInfo({weather, nowTime, forecast}: Props) {
    
    
    if(weather.name !== undefined){

        nowTime = new Date();

        let countForecast = Math.floor((24-nowTime.getHours())/3);

        for (let index = 0; index < countForecast; index++) {
            currentForecast[index] = forecast.list[index]
        }

        console.log(currentForecast)

        const sunriseTime = new Date(weather.sys.sunrise*1000);
        const sunsetTime = new Date(weather.sys.sunset*1000);

        const leftBar = sunriseTime.getHours()*60 + sunriseTime.getMinutes();
        const rightBar = sunsetTime.getHours()*60 + sunsetTime.getMinutes();

        let sunriseClockHours = sunriseTime.getHours()
        let sunriseClockMinutes = sunriseTime.getMinutes()

        if(sunriseClockHours > 12){
            sunriseClockHours -= 12;
        }

        sunriseClockHours *= 30;
        sunriseClockMinutes *= 6;

        const sunriseClockHoursStyle = {
            transform: `rotate(${sunriseClockHours}deg)`
        }

        const sunriseClockMinutesStyle = {
            transform: `rotate(${sunriseClockMinutes}deg)`
        }

        let sunsetClockHours = sunsetTime.getHours()
        let sunsetClockMinutes = sunsetTime.getMinutes()

        if(sunsetClockHours > 12){
            sunsetClockHours -= 12;
        }

        sunsetClockHours *= 30;
        sunsetClockMinutes *= 6;

        const sunsetClockHoursStyle = {
            transform: `rotate(${sunsetClockHours}deg)`
        }

        const sunsetClockMinutesStyle = {
            transform: `rotate(${sunsetClockMinutes}deg)`
        }

        const currentMinute = nowTime.getHours()*60 + nowTime.getMinutes();

        let sunBarStyle = {}

        if(currentMinute <= leftBar){
            sunBarStyle = {left: '-10px'}
        }

        if(currentMinute>= rightBar){
            sunBarStyle = {left: '190px'}
        }

        if(currentMinute <= rightBar && currentMinute >= leftBar){
            const sunBarMinute = Math.round(((currentMinute-leftBar)/(rightBar - leftBar))*100)
            sunBarStyle = {left: `${(sunBarMinute*2)-10}px`}
        }

        switch (true) {
            case (weather.wind.deg === 360):
                windDirection = 'С';
                break;
            case (weather.wind.deg === 90):
                windDirection = 'В';
                break;
            case (weather.wind.deg === 180):
                windDirection = 'Ю';
                break;
            case (weather.wind.deg === 270):
                windDirection = 'З';
                break;
            case (weather.wind.deg < 90):
                windDirection = 'СВ';
                break;
            case (weather.wind.deg > 90 && weather.wind.deg < 180):
                windDirection = 'ЮВ';
                break;
            case (weather.wind.deg > 180 && weather.wind.deg < 270):
                windDirection = 'ЮЗ';
                break;
            case (weather.wind.deg > 270 && weather.wind.deg < 360):
                windDirection = 'СЗ';
                break;
            default:
                windDirection = 'С'
                break;
        }

        const pressure = Math.round(weather.main.pressure*0.75);

        

        return (

            <div>
                <div className='city'>
                    <BsFillGeoAltFill className='city-icon'/>
                    <p>{weather.name}</p>
                </div>

                <div className='weather__info'>
                    <div className='weather__info-icon'>
                        <div className='icons-case'>
                            <WeatherStatusSelector id={weather.weather[0].icon}/>
                        </div>
                        <p className='weather__info-description'>{weather.weather[0].description}</p>
                    </div>
                    <div className='weather__info-main'> 

                        <div className='weather__info-temp'>
                            <p className='main-temp'>{Math.round(weather.main.temp)}<span>°C</span></p>
                            <p className='feels-like'>Ощущается как: {Math.round(weather.main.feels_like)}°C</p>
                            <p className='date'>{nowTime.getDate()} {month.get(nowTime.getMonth())}</p>
                            <p className='now-time'>{day.get(nowTime.getDay())} | {('0'+(nowTime.getHours())).slice(-2)}:{('0'+(nowTime.getMinutes())).slice(-2)}</p>
                        </div>

                        <div className='weather__info-extra'>

                            <div className='weather__info-extra-item'>
                                <div className='weather__info-extra-item-icon'>
                                    <GLobalSvgSelector id = 'humidity'/>
                                    <p>Влажность</p>
                                </div>
                                <p className='extra-info'>{weather.main.humidity} %</p>
                            </div>

                            <div className='weather__info-extra-item'>
                                <div className='weather__info-extra-item-icon'>
                                    <GLobalSvgSelector id = 'pressure'/>
                                    <p>Давление</p>
                                </div>
                                <p className='extra-info'>{pressure} мм рт. ст.</p>
                            </div>

                            <div className='weather__info-extra-item'>
                                <div className='weather__info-extra-item-icon'>
                                    <GLobalSvgSelector id = 'wind-speed'/>
                                    <p>Ветер</p>
                                </div>
                                <p className='extra-info'>{Math.round(weather.wind.speed)} м/с</p>
                            </div>

                            <div className='weather__info-extra-item'>
                                <div className='weather__info-extra-item-icon'>
                                    <GLobalSvgSelector id = 'uv'/>
                                    <p>Направление</p>
                                </div>
                                <p className='extra-info'>{windDirection}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className='o-clocks'>
                    
                    <div className='clock sunrise'>
                        <p className='clock-text'>Восход</p>
                        <div className='minutes' style={sunriseClockMinutesStyle}></div>
                        <div className='hours' style={sunriseClockHoursStyle}></div>
                        <p className='o-clock-time'>{('0'+sunriseTime.getHours()).slice(-2)}:{('0'+sunriseTime.getMinutes()).slice(-2)}</p>
                    </div>
        
                    <div className='clock sunset'>
                        <p className='clock-text'>Закат</p>
                        <div className='minutes' style={sunsetClockMinutesStyle}></div>
                        <div className='hours' style={sunsetClockHoursStyle}></div>
                        <p className='o-clock-time'>{('0'+sunsetTime.getHours()).slice(-2)}:{('0'+sunsetTime.getMinutes()).slice(-2)}</p>
                    </div>
    
                </div>
    
                <div className='sunset-sunrise__info'>
        
                    <GLobalSvgSelector id='sunrise'/>
                    <div className='progress_bar'>
                        <CiSun className='sun-icon'
                            style={sunBarStyle}
                        />
                    </div>
                    <GLobalSvgSelector id='sunset'/>
        
                </div>
                <div className='forecast'>
                    {currentForecast.map((el:any) => (
                        <ForecastItem forecast={el}/>
                    ))}
                </div>
            </div>
        )
    }
    else return(

        //Test div without values
        // <div>
        //     <div className='city'>
        //         <BsFillGeoAltFill className='city-icon'/>
        //         <p>Москва</p>
        //     </div>

        //     <div className='weather__info'>

        //         <div className='weather__info-icon'>
        //             <div className='icons-case'>
        //                 <WeatherStatusSelector id='02n'/>
        //             </div>
        //             <p className='weather__info-description'>облачно с прояснениями</p>
        //         </div>

        //         <div className='weather__info-main'> 

        //             <div className='weather__info-temp'>
        //                 <p className='main-temp'>27°C</p>
        //                 <p className='feels-like'>Ощущается как: 25°C</p>
        //                 <p className='date'>15 Сен</p>
        //                 <p className='now-time'>Воскресенье | 12:45</p>
        //             </div>

        //             <div className='weather__info-extra'>

        //                 <div className='weather__info-extra-item'>
        //                     <div className='weather__info-extra-item-icon'>
        //                         <GLobalSvgSelector id = 'humidity'/>
        //                         <p>Влажность</p>
        //                     </div>
        //                     <p className='extra-info'>54 %</p>
        //                 </div>

        //                 <div className='weather__info-extra-item'>
        //                     <div className='weather__info-extra-item-icon'>
        //                         <GLobalSvgSelector id = 'pressure'/>
        //                         <p>Давление</p>
        //                     </div>
        //                     <p className='extra-info'>700 мм рт. ст.</p>
        //                 </div>

        //                 <div className='weather__info-extra-item'>
        //                     <div className='weather__info-extra-item-icon'>
        //                         <GLobalSvgSelector id = 'wind-speed'/>
        //                         <p>Ветер</p>
        //                     </div>
        //                     <p className='extra-info'>4 м/с</p>
        //                 </div>

        //                 <div className='weather__info-extra-item'>
        //                     <div className='weather__info-extra-item-icon'>
        //                         <GLobalSvgSelector id = 'uv'/>
        //                         <p>Направление</p>
        //                     </div>
        //                     <p className='extra-info'>ЮВ</p>
        //                 </div>
        //             </div>
                    
        //         </div>
                
        //     </div> 

        //     <div className='o-clocks'>
                    
        //         <div className='clock sunrise'>
        //             <p className='clock-text'>Восход</p>
        //             <div className='minutes'></div>
        //             <div className='hours'></div>
        //             <p className='o-clock-time'>06:24</p>
        //         </div>
    
        //         <div className='clock sunset'>
        //             <p className='clock-text'>Закат</p>
        //             <div className='minutes'></div>
        //             <div className='hours'></div>
        //             <p className='o-clock-time'>18:41</p>
        //         </div>
    
        //     </div>
    
        //     <div className='sunset-sunrise__info'>
    
        //         <GLobalSvgSelector id='sunrise'/>
        //         <div className='progress_bar'>
        //             <CiSun className='sun-icon'
        //                 style={{left: '-10px'}}
        //             />
        //         </div>
        //         <GLobalSvgSelector id='sunset'/>
    
        //     </div>

        //     <div className='forecast'>
        //         {bimForecast.map((el:any) => (
        //             <ForecastItem key={el.dt} forecast={el}/>
        //         ))}
        //     </div>
            
            
        // </div>

        <div className='empty-info'>
            <h1>Пока пусто... <br />Напишите название города и узнайте прогноз!</h1>
        </div>
            
    )   
  
}

export default WeatherInfo