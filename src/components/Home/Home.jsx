import { useLoaderData } from "react-router-dom";
import DonateCarts from "../DonateCarts/DonateCarts";
import Banner from "../Banner/Banner";


const Home = () => {

    const donateCartsData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <DonateCarts donateCartsData={donateCartsData}></DonateCarts>
        </div>
    );
};

export default Home;