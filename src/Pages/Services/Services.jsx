
import { useContext } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import { AuthContext } from "../../Providers/Providers";

const Services = () => {

    const { events } = useContext(AuthContext)

    return (
        <div className="max-w-6xl mx-auto py-10 my-14">
            <div className="space-y-3 mb-8">
                <h1 className="text-4xl font-extrabold text-center">Our Services</h1>
                <p className="text-center w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium, unde illo, quas dignissimos magnam saepe odio.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {
                    events.map(event => <ServicesCard key={event.id} event={event}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;