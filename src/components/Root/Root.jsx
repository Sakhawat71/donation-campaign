import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="max-w-6xl mx-10 md:mx-20 lg:mx-auto ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;