import './App.css';
import AppRouter from "./routing/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AppRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
