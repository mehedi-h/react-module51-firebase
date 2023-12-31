import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/UserProvider";

const Login = () => {

  const { loginUser, loading } =  useContext(AuthContext)
  const navigate = useNavigate()

  if (loading) {
    return <span className="loading loading-ring loading-lg flex justify-center items-center"></span>
  }
  
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()
        navigate('/')
        console.log(email, password);

        loginUser(email, password)
        .then(res => {
          console.log(res.user);
        })
        .catch(error => {
          console.log(error);
        })
    }
    
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center md:py-3 lg:py-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>New Here? Please
                <Link to="/registration">
                    <button className="btn btn-active btn-link">Registration</button>
                </Link>
            </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
