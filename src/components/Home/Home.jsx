import { useLoaderData } from "react-router-dom";
import DonateCards from "../DonateCards/DonateCards";
import Header from "../Header/Header";


const Home = () => {

    const donateCartsData = useLoaderData();

    return (
        <div>
            <Header></Header>
            <DonateCards donateCartsData={donateCartsData}></DonateCards>
        </div>
    );
};

export default Home;