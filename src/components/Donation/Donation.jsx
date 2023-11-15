import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Donation = ({ donated }) => {

    const {id, picture, title, price, category, categoryBgColor, textButtonBgColor, cardBgColor } = donated;

    return (
        <div style={{ background: cardBgColor }} className='flex items-center gap-6 rounded-md '>

            <div className=''>
                <figure className='h-full'>
                    <img className='w-[220px] h-[200px]' src={picture} alt="" />
                </figure>
            </div>

            <div className='py-6 space-y-2'>
                <span style={{ background: categoryBgColor, color: textButtonBgColor }} className="py-2 px-2 rounded-md text-[14px] font-medium">{category}</span>

                <h2 className='font-semibold text-2xl text-custom-black'>{title}</h2>

                <p style={{ color: textButtonBgColor }} className='font-semibold'>{price}</p>

                <Link to={`/donation-details/${id}`}>
                    <button style={{ background: textButtonBgColor }} className=' mt-3 font-semibold text-neutral-50 px-4 py-2 rounded-md'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

Donation.propTypes = {
    donated: PropTypes.object,
};

export default Donation;