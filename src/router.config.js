//router-config

import Home from './ReactPage/Home'
import Documentation from './ReactPage/Documentation';
import Tutorials from './ReactPage/Tutorials';
import Community from './ReactPage/Community';
import Login from './ReactPage/Login';
import Blog from './ReactPage/Blog'
const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/tutorials',
        component:Tutorials
    },
    {
        path:'/login',
        component:Login,
        pri:true
    },
    {
        path:'/documentation',
        component:Documentation,
        children:true
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/community',
        component:Community
    }
]

export default routes