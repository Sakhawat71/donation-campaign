import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-10 md:mt-40 space-y-3">
            <h1 className="text-custom-red font-black text-7xl md:text-9xl">404</h1>
            <h1 className="font-bold text-2xl text-custom-black">Page Not Found</h1>    
            <h2 className="">Sorry, we couldn`t find the page.</h2>    
            <Link to="/"><button className="btn bg-[#0052FF26]">Go to Home</button>  </Link> 
        </div>
    );
};

export default ErrorPage;