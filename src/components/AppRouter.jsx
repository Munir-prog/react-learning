import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import Post from "../pages/Post";
import {routes} from "../router"
const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                    />
                )
            }
            <Route path="/about" element={<About/>}/>
            {/*<Route exact path="/posts" element={<Posts/>}/>*/}
            {/*<Route exact path="/" element={<Posts/>}/>*/}
            {/*<Route exact path="/post/:id" element={<Post/>}/>*/}
            {/*/!* 👇️ only match this when no other routes match *!/*/}
            {/*<Route path="*" element={<NotFound/>} />*/}
        </Routes>
    );
};

export default AppRouter;