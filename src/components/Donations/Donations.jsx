import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordDonationData } from "../../utility/localStorage";
import Donation from "../Donation/Donation";

const Donations = () => {

    const donations = useLoaderData();
    const [donatedCard, setDonatedCard] = useState([])


    useEffect(() => {
        const donatedId = getStordDonationData();

        if (donatedId.length > 0) {
            const totalDonate = donations.filter(donation => donatedId.includes(donation.id));

            setDonatedCard(totalDonate);
        }
    }, [donations])


    return (
        <div>
            {
                donatedCard?.map(donated => <Donation
                    key={donated.id}
                    donated={donated}
                ></Donation>)
            }
        </div>
    );
};

export default Donations;