import React, {useContext, useEffect, useState} from 'react';
import cl from './SelectCity.module.css'
import {getCountryData} from "../../http/requests";
import {Autocomplete, Divider, TextField} from "@mui/material";
import {CityContext} from "../../App";

const SelectCity = () => {
    const [data, setData] = useState([])
    const [countries, setCountries] = useState([])
    const [getStates, setStates] = useState([])
    const [getCities, setCities] = useState([])
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [isButtonActive, setIsButtonActive] = useState(false)

    const [defaultCity, setDefaultCity] = useContext(CityContext)

    useEffect(() => {
        getCountryData().then(response => {
            setData(response)
            let newCountries = [...new Set(response.map(item => item.country))]
            newCountries.sort()
            setCountries(newCountries)
        })
    }, [])

    const countryChanged = (newCountry) => {
        setCountry(newCountry)
        let states = data.filter(state => state.country === newCountry)
        states = [...new Set(states.map(item => item.subcountry))]
        states.sort()
        setStates(states)
    }

    const stateChanged = (newState) => {
        setState(newState)
        let cities = data.filter(city => city.subcountry === newState)
        cities = [...new Set(cities.map(item => item.name))]
        cities.sort()
        setCities(cities)
    }

    const cityChanged = (newCity) => {
        setCity(newCity)
        if(newCity) {
            setIsButtonActive(true)
        } else {
            setIsButtonActive(false)
        }
    }

    const selectCity = (e, cityToSet = city) => {
        if(cityToSet) {
            setDefaultCity(cityToSet)
            localStorage.setItem("city", cityToSet + " " + country)
        }
    }

    return (
        <div className={["container", cl.outer].join(" ")}>
            <h1 className={cl.selectTitle}>Select your region</h1>
            <Autocomplete
                disablePortal
                id="select-country"
                options={countries}
                onChange={(event, newValue) => {
                    countryChanged(newValue)
                }}
                value={country}
                sx={{ maxWidth: '100%', marginBottom: '30px' }}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
            <Autocomplete
                disablePortal
                id="select-state"
                options={getStates}
                onChange={(event, newValue) => {
                    stateChanged(newValue)
                }}
                value={state}
                sx={{ maxWidth: '100%', marginBottom: '30px' }}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
            <Autocomplete
                disablePortal
                id="select-state"
                options={getCities}
                onChange={(event, newValue) => {
                    cityChanged(newValue)
                }}
                value={city}
                sx={{ maxWidth: '100%' }}
                renderInput={(params) => <TextField {...params} label="City" />}
            />
            <button
                style={{
                    marginTop: '30px',
                    maxWidth: '200px'
                }}
                onClick={selectCity}
                className={["public_button", !isButtonActive && "disabled"].join(" ")}
            >
                Select
            </button>
            <Divider
                sx={{
                    marginTop: '30px',
                    marginBottom: '30px'
                }}
            >
                or
            </Divider>
            <button className="public_button">Use device location</button>
        </div>
    );
};

export default SelectCity;