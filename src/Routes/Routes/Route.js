import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import News from "../../Pages/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



 export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
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
    }

])