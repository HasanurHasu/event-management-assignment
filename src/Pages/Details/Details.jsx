import { useContext } from "react";
import { AuthContext } from "../../Providers/Providers";
import { useParams } from "react-router-dom";

const Details = () => {
    const { events } = useContext(AuthContext)
    const { id } = useParams()
    const idInt = parseFloat(id);

    const event = events.find(event => event.id === idInt)

    const { name, image, description } = event;
    return (
        <div className="space-y-4 mt-8 max-w-6xl mx-auto">
            <figure><img src={image} alt="" className="w-full" /></figure>
            <div className="space-y-4">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                <button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">See More</button>
                </div>
            </div>
        </div>
    );
};

export default Details;