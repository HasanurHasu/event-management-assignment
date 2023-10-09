import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";


const Login = () => {

    const { singIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        singIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    return (
        <div className="bg-base-200">
            <div className="hero max-w-6xl m-auto min-h-screen bg-base-200">
                <div className="hero-content flex-col w-2/4">
                    <h1 className="text-4xl text-[#D72050] mb-3 font-bold">Login now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" required className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" required className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#D72050] px-5 py-2 rounded-md text-white ">Login</button>
                            </div>
                        </form>
                        <p className="text-center mb-4">Don&#39;t have an account? Please <Link className="text-blue-600" to='/register'>Registration</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;