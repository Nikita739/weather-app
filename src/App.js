import './App.css';
import AppRouter from "./routing/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {createContext, useState} from "react";

export const CityContext = createContext(null)

function App() {
    const defaultCity = useState(localStorage.getItem("city") ? localStorage.getItem("city") : "")

    return (
        <CityContext.Provider value={defaultCity}>
            <BrowserRouter>
                <div className="App">
                    <AppRouter />
                </div>
            </BrowserRouter>
        </CityContext.Provider>
    );
}

export default App;
