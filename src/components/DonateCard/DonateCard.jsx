import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonateCard = ({ donate }) => {

    const { picture, category, title, textButtonBgColor, categoryBgColor, cardBgColor } = donate || {};

    return (
        <Link >
            <div className="card card-compact rounded-md">
                <figure><img src={picture} alt="" /></figure>

                <div style={{background: cardBgColor}} className="px-2 py-5 rounded-b-md ">
                    <p style={{color: textButtonBgColor, background: categoryBgColor}} className={`py-2 px-4 mx-auto `}>{category}</p>

                    <h2 style={{color: textButtonBgColor}} className="text-xl font-semibold">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

DonateCard.propTypes = {
    donate: PropTypes.object,
};

export default DonateCard;