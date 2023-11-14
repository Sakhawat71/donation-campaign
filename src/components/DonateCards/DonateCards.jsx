
import PropTypes from 'prop-types';
import DonateCard from '../DonateCard/DonateCard';

const DonateCards = ({ donateCartsData }) => {
    console.log(donateCartsData)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mb-52 md:mt-24 '>
            {
                donateCartsData.map(donate => <DonateCard
                    key={donate.id}
                    donate={donate}
                ></DonateCard>)
            }
        </div>
    );
};

DonateCards.propTypes = {
    donateCartsData: PropTypes.array,
};

export default DonateCards;