import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>
        <div className="text-center pt-6 border-t border-base-300">
          <p className="text-base-content/70">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="link link-primary font-bold hover:link-secondary transition-colors"
            >
              Create one now!
            </Link>
          </p>
        </div>
      </fieldset>
    </div>
  );
};
export default Login;
