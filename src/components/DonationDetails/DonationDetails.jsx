import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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


    const handelDonetionComplete = () => {
        saveDonationData(+id)
        toast('Donation done successfully')
    }


    return (
        <div className="my-16">
            <figure
                className=" w-full h-72 md:h-96 lg:h-[480px] xl:h-[550px] 2xl:h-[700px] mb-12 relative rounded-md"
                style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}
            >

                <div className="bg-black bg-opacity-60 absolute left-0 bottom-0 p-3 md:p-5 lg:p-10 w-full rounded-b-md">

                    <button
                        onClick={handelDonetionComplete}
                        className=" bg-custom-red font-semibold text-xl rounded-md text-neutral-50 py-4 px-6 bottom-2 absolute"
                        style={{ backgroundColor: "rgb(255, 68, 74)" }}
                    >Donate {price}</button>

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