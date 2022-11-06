import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import {privateRoutes} from "../router"
import {publicRoutes} from "../router"
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                {
                    privateRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                }
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(route =>
                        <Route
                            element={route.component}
                            path={route.path}
                            exact={route.exact}
                            key={route.path}
                        />
                    )
                }
            </Routes>
    );
};

export default AppRouter;