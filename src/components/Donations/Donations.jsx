import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStordDonationData } from "../../utility/localStorage";
import Donation from "../Donation/Donation";

const Donations = () => {

    const donations = useLoaderData();

    const [donatedCard, setDonatedCard] = useState([])
    const [showCard, setShowCard] = useState(4)

    useEffect(() => {
        const donatedId = getStordDonationData();

        if (donatedId.length > 0) {
            const totalDonate = donations.filter(donation => donatedId.includes(donation.id));

            setDonatedCard(totalDonate);
        }
    }, [donations])


    return (
        <div className="my-20 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    donatedCard?.slice(0,showCard).map(donated => <Donation
                        key={donated.id}
                        donated={donated}
                    ></Donation>)
                }
            </div>
            <div className="my-10 flex justify-center ">
                <button onClick={()=>setShowCard(donatedCard.length)}  className={showCard === donatedCard.length ? "btn hidden bg-[#009444] hover:bg-[#009444] text-neutral-50 text-[18px]" :"btn bg-[#009444] hover:bg-[#009444] text-neutral-50 text-[18px]" } >See All</button>
            </div>
        </div>
    );
};

export default Donations;