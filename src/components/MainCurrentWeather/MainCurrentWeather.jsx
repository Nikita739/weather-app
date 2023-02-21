import React from 'react';
import cl from './MainCurrentWeather.module.css'
import {Skeleton} from "@mui/material";

const MainCurrentWeather = ({currentWeather, city}) => {
    const getFormattedCity = (str) => {
        const newArr = str.split(" ")
        const country = newArr.pop()
        return `${newArr.join(" ")}, ${country}`
    }

    return (
        <div className={cl.currentWeather}>
            <div className={cl.overviewWrapper}>
                <div>
                    {currentWeather.condition.icon
                        ?
                        <img alt="Weather img" width={64} height={64} src={currentWeather.condition.icon} />
                        :
                        <Skeleton variant="rectangular" width={64} height={64} />
                    }
                    <p className={cl.currentWeatherCondition}>
                        {currentWeather.condition.text
                            ?
                            currentWeather.condition.text
                            :
                            <Skeleton variant="text" sx={{ fontSize: '20px', maxWidth: '300px' }} />
                        }
                    </p>
                </div>
                <div className={cl.celciusWrapper}>
                    <p>
                        {currentWeather.temp_c
                            ?
                            `${currentWeather.temp_c}° / ${currentWeather.temp_f}℉`
                            :
                            <Skeleton variant="text" sx={{ fontSize: '50px', width: '230px'}} />
                        }
                    </p>
                </div>
            </div>
            <div className={cl.cityWrapper}>
                <p>
                    {getFormattedCity(city)}
                </p>
            </div>
        </div>
    );
};

export default MainCurrentWeather;