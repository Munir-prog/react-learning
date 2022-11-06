import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/post/:id', component: <Post/>, exact: true},
    {path: '/', component: <Posts/>, exact: true},
    {path: '*', component: <NotFound/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '*', component: <Login/>, exact: true},
]