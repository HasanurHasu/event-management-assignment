import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div data-aos="fade-up" className="hero w-11/12 md:h-[350px] mx-auto md:w-[780px] lg:w-full  lg:h-[520px] mt-5 rounded-md lg:max-w-6xl lg:mx-auto md:mx-12" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
            <div className="hero-overlay bg-opacity-50 rounded-md"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to='/register'><button className="bg-[#D72050] px-7 py-2 rounded-3xl text-white ">Register Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;