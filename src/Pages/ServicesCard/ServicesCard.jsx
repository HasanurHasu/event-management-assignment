
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({ event }) => {
    const {id, name, image, price, description } = event;
    return (
        <div>
            <div className="border px-4 py-4 rounded-md">
                <figure className="">
                    <img src={image} alt="Shoes" className="rounded-md" />
                </figure>
                <div className="pt-4 space-y-2">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>${description.slice(0, 70)}..</p>
                    <div className="card-actions">
                        <Link to={`/services/${id}`}><button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">See More</button></Link>
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