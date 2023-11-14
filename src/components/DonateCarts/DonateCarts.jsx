import PropTypes from 'prop-types';

const DonateCarts = ({ donateCartsData }) => {

    console.log(donateCartsData)

    return (
        <div>
            {
                donateCartsData?.map()
            }
        </div>
    );
};

DonateCarts.propTypes = {
    donateCartsData: PropTypes.array,
};

export default DonateCarts;



