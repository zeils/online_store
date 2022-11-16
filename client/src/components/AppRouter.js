import React from "react";
import {Routes, Route} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";




const AppRouter = () => {
 
    return (
        <Routes>

            {publicRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component/>}/>      
            )}

            {authRoutes.map(({path, Component}) =>
                <Route exact key={path} path={path} element={<Component/>}/>
            )}

        </Routes>

    )
}

export default AppRouter;