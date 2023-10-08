import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import TeamMember from "../TeamMember/TeamMember";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Subscribe></Subscribe>
            <TeamMember></TeamMember>
            <Footer></Footer>
        </div>
    );
};

export default Home;