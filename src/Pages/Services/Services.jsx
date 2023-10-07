import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-center my-6">Our Services</h1>
            <p className="text-center w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium, unde illo, quas dignissimos magnam saepe odio.</p>
            <div className="grid grid-cols-3 gap-5 mt-6">
                {
                    events.map(event => <ServicesCard key={event.id} event={event}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;