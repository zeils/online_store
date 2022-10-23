import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";





const AppRouter = () => {
    const {user} = useContext(Context)




    
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