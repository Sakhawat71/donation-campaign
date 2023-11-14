import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonateCard = ({ donate }) => {

    const {id, picture, category, title, textButtonBgColor, categoryBgColor, cardBgColor } = donate || {};

    return (
        <Link to={`/donation-details/${id}`}>
            <div className="card card-compact rounded-md ">
                <figure><img src={picture} alt="" /></figure>

                <div style={{background: cardBgColor}} className="px-2 py-5 rounded-b-md space-y-3">

                    <span style={{color: textButtonBgColor, background: categoryBgColor}} className="py-2 px-2 rounded-md text-[14px] font-medium">{category}</span>

                    <h2 style={{color: textButtonBgColor}} className="text-[20px] font-semibold">{title}</h2>

                </div>
            </div>
        </Link>
    );
};

DonateCard.propTypes = {
    donate: PropTypes.object,
};

export default DonateCard;