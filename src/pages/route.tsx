import { createBrowserRouter } from "react-router";
import HomePage from "./home/home.page";
import Layout from "./layout";


const route = createBrowserRouter([{
    element:<Layout/>,
    children:[{
        path: "/",
        element: <HomePage/>
    }]
}])

export default route;
