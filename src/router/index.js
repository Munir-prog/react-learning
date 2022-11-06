import About from "../pages/About";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";

export const routes = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/post/:id', component: <Post/>, exact: true},
    {path: '*', component: <NotFound/>, exact: true},
]