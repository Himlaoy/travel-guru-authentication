import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Booking from "../Page/Booking/Booking";
import Team from "../Page/Team/Team";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"booking",
                element:<Booking></Booking>,
            },
            {
                path:'team',
                element:<Team></Team>,
            }
        ]
    }
])

export default router