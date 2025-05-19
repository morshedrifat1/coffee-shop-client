import {
  createBrowserRouter,
} from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee";
import ErrorPage from "../Pages/ErrorPage";
import CoffeeDetails from "../Pages/CoffeeDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    Component:MainLayouts,
    children:[
        {
            index:true,
            Component:Home,
            loader:()=>fetch('http://localhost:5000/coffees')
        },
        {
            path:'/add-coffee',
            Component:AddCoffee
        },
        {
            path:'/update-coffee/:id',
            Component:UpdateCoffee,
            loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
        },
        {
            path:'/coffee-details/:id',
            Component:CoffeeDetails,
            loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
        }
    ]
  }
]);