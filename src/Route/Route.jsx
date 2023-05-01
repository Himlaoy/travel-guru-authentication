import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Page/Home/Home";
import Booking from "../Page/Booking/Booking";

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
                element:<Booking></Booking>
            }
        ]
    }
])

export default router