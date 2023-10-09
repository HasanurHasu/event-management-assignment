import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import TeamMember from "../TeamMember/TeamMember";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="bg-[#FFF8F5]">
                <Services></Services>
            </div>
            <TeamMember></TeamMember>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;