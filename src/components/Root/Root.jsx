import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const Root = () => {
    return (
        <div className="max-w-6xl mx-10 md:mx-20 lg:mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;