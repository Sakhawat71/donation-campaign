import { NavLink } from "react-router-dom";
import { GrClose, GrMenu } from 'react-icons/gr';
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <nav className="navbar bg-base-100 py-5">

            <div className="flex-1">
                <NavLink to="/">
                    <figure className="">
                        <img className="w-44" src="https://i.ibb.co/QYfH7ph/Logo.png" alt="" />
                    </figure>
                </NavLink>
            </div>

            <div className="flex-none hidden sm:block ">
                <ul className=" menu-horizontal text-custom-black font-normal text-[18px] px-1 gap-11">

                    <li><NavLink className={({ isActive, isPanding }) => isPanding ? 'pending' : isActive ? 'text-custom-red font-semibold underline' : ''} to="/">Home</NavLink></li>

                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-custom-red font-semibold underline" : ""
                    } to="/donations">Donations</NavLink></li>

                    <li><NavLink className={({ isActive, isPanding }) => isPanding ? 'pending' : isActive ? 'text-custom-red font-semibold underline' : ''} to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>

            <div onClick={() => setOpen(!open)} className="md:hidden">
                <details className="dropdown dropdown-end">
                    <summary className="m-1 btn text-2xl">
                        {
                            open === true ? <GrClose ></GrClose> : <GrMenu ></GrMenu>
                        }
                    </summary>
                    <ul className="p-2 space-y-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-auto">

                        <NavLink
                            className="mx-2 bg-[#79C23F26] py-2 px-4 font-semibold text-xl rounded-md"
                            to="/"
                        >Home</NavLink>

                        <NavLink
                            className="mx-2 bg-[#79C23F26] py-2 px-4 font-semibold text-xl rounded-md"
                            to="/donations"
                        >Donations</NavLink>

                        <NavLink
                            className="mx-2 bg-[#79C23F26] py-2 px-4 font-semibold text-xl rounded-md"
                            to="/statistics"
                        >Statistics</NavLink>

                    </ul>
                </details>
            </div>
        </nav>
    );
};

export default Navbar;