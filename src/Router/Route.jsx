import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Donations from "../components/Donations/Donations";
import DonationDetails from "../components/DonationDetails/DonationDetails";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donate.json')
            },
            {
                path: "/donations",
                element: <Donations></Donations>,
                loader: () => fetch('/donate.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donate.json')
            }
        ]
        
    }
])

export default Route;