import { NavLink } from "react-router-dom";

const Header = () => {

    // const links = <>
    // <li><NavLink className="text-custom-red" to="/">Home</NavLink></li>
    // <li><NavLink to="/donation">Donation</NavLink></li>
    // <li><NavLink to="/statistics">Statistics</NavLink></li>

    // </>

    return (
        <nav className="navbar bg-base-100 py-5">

            <div className="flex-1">
                <NavLink to="/">
                    <figure className="">
                        <img className="w-44" src="/src/img/logo.png" alt="" />
                    </figure>
                </NavLink>
            </div>

            <div className="flex-none hidden sm:block ">
                <ul className=" menu-horizontal text-custom-black font-normal text-[18px] px-1 gap-11">

                    <li><NavLink className={({ isActive, isPanding }) => isPanding ? 'pending' : isActive ? 'text-custom-red font-semibold underline' : ''} to="/">Home</NavLink></li>

                    <li><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-custom-red font-semibold underline" : ""
                    } to="/donation">Donation</NavLink></li>

                    <li><NavLink className={({ isActive, isPanding }) => isPanding ? 'pending' : isActive ? 'text-custom-red font-semibold underline' : ''} to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;