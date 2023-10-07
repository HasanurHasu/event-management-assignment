
import PropTypes from 'prop-types';

const ServicesCard = ({ event }) => {
    const { name, image, price } = event;
    return (
        <div>
            <div className="border px-4 py-4 rounded-md">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-md" />
                </figure>
                <div className="pt-4 space-y-2">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    event: PropTypes.object
};

export default ServicesCard;