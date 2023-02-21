import axios from "axios";

export const getCountryData = async () => {
    try {
        const response = await axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json")
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getWeatherByCity = async (q) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: q, days: '3'},
        headers: {
            'X-RapidAPI-Key': '0c2acbf159mshf961ced96646e62p1f16b8jsn6b686086e87e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options)
        return response.data
    } catch (e) {
        console.log(e)
    }
}