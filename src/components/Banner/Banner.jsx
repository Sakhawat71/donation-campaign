
const Banner = () => {
    return (

        <div className=" mb-20 py-32 relative">
           
           <div className="bg-cover bg-center absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("/images/bg.png")', opacity: 0.1 }}></div>
            <h1 className="font-bold text-4xl text-center mb-8 text-custom-black relative z-10">I Grow By Helping People In Need</h1>

            <div className="join text-center flex mt-8 justify-center items-center relative z-10">
                <input className="input input-bordered join-item" placeholder="Search here...." />
                <button className="btn hover:bg-custom-red bg-custom-red text-neutral-50 join-item rounded-r-md" type="button">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Banner;