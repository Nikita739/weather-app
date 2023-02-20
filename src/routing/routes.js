import SelectCity from "../pages/SelectCity/SelectCity";
import ViewWeather from "../pages/ViewWeather/ViewWeather";

export const routes = [
    {path: '/select-place', element: <SelectCity />},
    {path: '/', element: <ViewWeather />},
]