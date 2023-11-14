import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordDonationData } from "../../utility/localStorage";

const Donation = () => {

    const donations = useLoaderData();
    const [donatedCard,setDonatedCard] = useState([])
 

    useEffect(()=>{
        const donatedId = getStordDonationData();

        if(donatedId.length > 0){
            const totalDonate = donations.filter(donation => donatedId.includes(donation.id)) ;

            setDonatedCard(totalDonate); 
        }
    },[donations])


    return (
        <div>
            {
                donatedCard.map(donated => )
            } 
        </div>
    );
};

export default Donation;