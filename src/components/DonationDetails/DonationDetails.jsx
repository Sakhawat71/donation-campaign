import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const [doantionCard, setDoantionCard] = useState({});
    const { id } = useParams()
    const donations = useLoaderData()

    const { price, title, description, picture } = doantionCard || {};


    useEffect(() => {

        const clickedDonation = donations.find(donation => donation.id === +id)
        setDoantionCard(clickedDonation)

    }, [id, donations])

    return (
        <div className="my-16">
            <figure className="relative my-5">
                <img className="w-screen" src={picture} alt="" />

                <div className="bg-neutral-50 w-screen">
                    <Link className="bg-custom-red font-semibold text-xl rounded-md text-neutral-50 py-4 px-6 bottom-2 absolute">Donate {price}</Link>
                </div>

            </figure>
            <div>
                <h1 className="font-bold text-[40px] text-custom-black">{title}</h1>
                <p className="text-[#0B0B0BB2]">{description}</p>
            </div>
        </div>
    );
};



export default DonationDetails;