import { useLoaderData } from "react-router-dom";
import DonateCards from "../DonateCards/DonateCards";
import Banner from "../Banner/Banner";


const Home = () => {

    const donateCartsData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <DonateCards donateCartsData={donateCartsData}></DonateCards>
        </div>
    );
};

export default Home;