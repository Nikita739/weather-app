import React from 'react';
import {routes} from "./routes";
import {Route, Routes} from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(el =>
                <Route path={el.path} element={el.element} />
            )}
        </Routes>
    );
};

export default AppRouter;