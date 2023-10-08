import { useEffect, useState } from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamMember = () => {

    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeamMembers(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-4 gap-8">
                {
                    teamMembers.map(member => <TeamMemberCard key={member.id} member={member}></TeamMemberCard>)
                }
            </div>
        </div>
    );
};

export default TeamMember;