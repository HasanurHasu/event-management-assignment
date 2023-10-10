import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/Providers";
import 'aos/dist/aos.css'
import Aos from "aos";


const Navbar = () => {
    useEffect(() => {
        Aos.init({duration: '500', delay: '200'})
    }, [])

    const navLinks = <>
        <NavLink className="py-2 px-5" to='/'>Home</NavLink>
        <NavLink className="py-2 px-5" to='/services'>Services</NavLink>
        <NavLink className="py-2 px-5" to='/dashboard'>Dashboard</NavLink>
        <NavLink className="py-2 px-5" to='/profile'>Profile</NavLink>
        <NavLink className="py-2 px-5" to='/about'>About Us</NavLink>
    </>

    const { user, logOut } = useContext(AuthContext)
    return (
        <div data-aos="fade-down" className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="text-4xl font-extrabold"><span className="text-[#D72050]">Event</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-1">
                            <div className="avatar">
                                <div className="w-12 rounded-full ring-offset-base-100 ring-offset-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" />
                                </div>
                            </div>
                            <button onClick={logOut} className="bg-[#D72050] px-5 py-2 rounded-md text-white ">Sign Out</button>
                        </div>
                        :
                        <Link to='/login'><button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">Login</button></Link>

                }
            </div>
        </div>
    );
};

export default Navbar;