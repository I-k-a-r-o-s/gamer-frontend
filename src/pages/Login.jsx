import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import AuthApi from "../api/AuthApi";

const Login = () => {
const {loading, setLoading, navigate} = useContext(AuthContext);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!formdata.email || !formdata.password){
      toast.error("Please fill all the fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await AuthApi.post("/api/users/login", formdata);
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input 
          type="email" 
          className="input" 
          placeholder="Email"
          value={formdata.email}
          onChange={(e) => setFormdata({...formdata, email: e.target.value})} />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" value={formdata.password} onChange={(e) => setFormdata({...formdata, password: e.target.value})} />

          <button className="btn btn-neutral mt-4" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
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
      </form>
    </div>
  );
};
export default Login;
