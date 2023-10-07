
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Providers = ({ children }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    const info = {events}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

Providers.propTypes = {
    children: PropTypes.node
};

export default Providers;