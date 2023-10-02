import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/UserProvider";


const Registration = () => {

    const { createUser } = useContext(AuthContext)

    const handleReg = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
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
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleReg}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
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
                  <button className="btn btn-primary">Registration</button>
                </div>
              </form>
              <p>Already have an account? Please
                <Link to="/login">
                    <button className="btn btn-active btn-link">Login</button>
                </Link>
            </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Registration;