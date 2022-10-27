import React from 'react'
import {UilArrowUp,UilArrowDown,UilTemperature,UilTear,UilWind,UilSun,UilSunset} from '@iconscout/react-unicons'
import {formatToLocalTime, iconUrlFromCode} from '../Api/WeatherCalls'

function TemperatureAndDetails({
    weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone,},
}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-center text-white py-3'>
            <img src={iconUrlFromCode(icon)} alt="weather icon" className='w-25 m-auto ' />
            <p className='text-5xl m-auto'>{`${temp.toFixed()}°`}</p>
            <div className='flex-shrink-0 flex-col space-y-2 m-auto '>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Feels like :
                    <span className='ml-1  font-medium'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity :
                    <span className='ml-1 font-medium'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind :
                    <span className='ml-1 font-medium'>{`${speed.toFixed()}mph`}</span>
                </div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center text-white py-3 space-x-1 text-sm '>
                <p className='flex-shrink-0 flex'>
                <UilSun size={18} />
                Rise:{" "}
                <span className='ml-1 '>{formatToLocalTime(sunrise,timezone,"hh:mm a")}</span>
                </p>
                    <p>|</p>
                
                <p className='flex-shrink-0 flex'>
                <UilSunset size={18} />
                Set:{" "}
                <span className='ml-1 '>{formatToLocalTime(sunset,timezone,"hh:mm a")}</span>
                </p>
                    <p >|</p>

                <p className='flex'>
                <UilArrowUp size={18} />
                High:{" "}
                <span className='ml-1'>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p>|</p>
            
                <p className='flex'>
               <UilArrowDown size={18} /> 
               Low:{" "}
               <span className='ml-1'>{`${temp_min.toFixed()}°`}</span>
               </p>
        </div>
    </div>
  )
}

export default TemperatureAndDetails