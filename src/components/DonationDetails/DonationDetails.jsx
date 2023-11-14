import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationData } from "../../utility/localStorage";

const DonationDetails = () => {

    const [donationCard, setDonationCard] = useState({});
    const { id } = useParams()
    const donations = useLoaderData()
    const { price, title, description, picture } = donationCard || {};

    useEffect(() => {

        const clickedDonation = donations?.find(donation => donation.id === +id)
        setDonationCard(clickedDonation)

    }, [id, donations])


    const handelDonetionComplete = () =>{
        saveDonationData(+id)
        toast('Donation done successfully')
    }


    return (
        <div className="my-16">
            <figure className="relative my-5">
                <img className="w-screen max-h-[500px]" src={picture} alt="" />

                <div >
                    <button onClick={handelDonetionComplete} className=" bg-custom-red font-semibold text-xl rounded-md text-neutral-50 py-4 px-6 bottom-2 absolute">Donate {price}</button>
                    <ToastContainer></ToastContainer>
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