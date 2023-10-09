import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";


const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="bg-base-200">
            <div className="hero max-w-6xl m-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col w-2/4">
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold text-[#D72050] mb-4">Registration Now</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name"  required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email"  required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" required className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                            <button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">Registration</button>
                            </div>
                        </form>
                        <p className="text-center -mt-4  mb-4">Already have an account? Please <Link className="text-blue-600" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;