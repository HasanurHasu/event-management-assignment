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
        <div className="my-20 max-w-6xl mx-auto">
            <div className="space-y-3 mb-8">
                <h1 className="text-4xl font-extrabold text-center">Our Team Members</h1>
                <p className="text-center w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium, unde illo, quas dignissimos magnam saepe odio.</p>
            </div>
            <div className="grid grid-cols-4 gap-8">
                {
                    teamMembers.map(member => <TeamMemberCard key={member.id} member={member}></TeamMemberCard>)
                }
            </div>
        </div>
    );
};

export default TeamMember;