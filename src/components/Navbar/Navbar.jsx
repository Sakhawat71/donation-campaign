import { NavLink } from "react-router-dom";


const Navbar = () => {
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
        </nav>
    );
};

export default Navbar;