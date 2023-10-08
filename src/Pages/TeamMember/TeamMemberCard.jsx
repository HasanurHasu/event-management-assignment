
import PropTypes from 'prop-types';

const TeamMemberCard = ({member}) => {
    const {name, img, designation} = member;
    return (
        <div style={{backgroundImage: `url(${img})`, backgroundPosition: 'center top', backgroundSize: 'cover'}} className='h-80 w-full rounded-md flex items-end'>
            <div className='bg-[#D72050] w-full py-2 px-4 text-white rounded-b-md'>
                <h1 className='text-xl font-medium'>{name}</h1>
                <p className='text-sm font-light'>{designation}</p>
            </div>
        </div>
    );
};

TeamMemberCard.propTypes = {
    member: PropTypes.object
};

export default TeamMemberCard;