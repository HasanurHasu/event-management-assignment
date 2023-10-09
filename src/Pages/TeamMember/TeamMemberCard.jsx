
import PropTypes from 'prop-types';
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect } from 'react';

const TeamMemberCard = ({ member }) => {
    useEffect(() => {
        Aos.init({ duration: '1000', delay: '500' })
    }, [])

    const { name, img, designation } = member;
    return (
        <div data-aos="fade-up">
            <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center top', backgroundSize: 'cover' }} className='h-80 w-full rounded-md flex items-end'>
                <div className='bg-[#D72050] w-full py-2 px-4 text-white rounded-b-md'>
                    <h1 className='text-xl font-medium'>{name}</h1>
                    <p className='text-sm font-light'>{designation}</p>
                </div>
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    member: PropTypes.object
};

export default TeamMemberCard;