import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import News from "../../Pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Course from '../../Pages/Course/Course'
import FAQ from '../../Pages/FAQ/FAQ'
import Blog from "../../Pages/Blog/Blog";
import PageNotFound from "../../pageNotFound/PageNotFound";

 export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('https://server-side-beige.vercel.app/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://server-side-beige.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://server-side-beige.vercel.app/news/${params.id}`)
            }
            
        ]
    },
    {
        path:'/login',
        element:<LogIn></LogIn>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/course',
        element:<Course></Course>
    },
    {
        path:'/faq',
        element:<FAQ></FAQ>
    },
    {
        path:'/blog',
        element:<Blog></Blog>
    },
    {
        path:'*',
        element:<PageNotFound></PageNotFound>
    }

])