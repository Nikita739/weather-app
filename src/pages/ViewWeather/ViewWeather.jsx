import React, {useContext, useEffect, useState} from 'react';
import {CityContext} from "../../App";
import {getWeatherByCity} from "../../http/requests";
import {useNavigate} from "react-router-dom";
import cl from './ViewWeather.module.css'
import {Skeleton} from "@mui/material";
import MainCurrentWeather from "../../components/MainCurrentWeather/MainCurrentWeather";

const ViewWeather = () => {
    const [city, setCity] = useContext(CityContext)
    const [weatherData, setWeatherData] = useState({})
    const [currentWeather, setCurrentWeather] = useState({condition: {}})
    const navigate = useNavigate()

    if(city.length === 0) {
        navigate('/select-city')
    }

    useEffect(() => {
        getWeatherByCity(city).then(data => {
            console.log(data)
            setWeatherData(data)

            setTimeout(() => {
                setCurrentWeather(data.current)
            }, 1000)
        })
    }, [])

    return (
        <div className={["container", cl.outer].join(" ")}>
            <MainCurrentWeather city={city} currentWeather={currentWeather} />
        </div>
    );
};

export default ViewWeather;