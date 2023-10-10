import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Providers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { singIn, singInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successfully')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                toast.error('Login failed, Try again later')

            })
    }
    const handleReg = () =>{
        singInWithGoogle()
        .then(result => {
            console.log(result.user);
            toast.success('User Login Successfully')
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error.message);
            toast.error('Login failed, Try again later')
    
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
                            <p className="text-center mt-2">Login with</p>
                        </form>
                        <div className="mx-auto -mt-4">
                            <button onClick={handleReg} className=" px-5  rounded-3xl  border-2 text-white ">
                                <div className="flex items-center px-6">
                                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-12" />
                                    <h1 className="text-black text-lg font-semibold">Sing in With Google</h1>
                                </div>
                            </button>
                        </div>
                        <p className="text-center mt-2 mb-4">Don&#39;t have an account? Please <Link className="text-blue-600" to='/register'>Registration</Link> </p>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;