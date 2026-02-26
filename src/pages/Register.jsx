import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import AuthApi from "../api/AuthApi";

const Register = () => {
  const { navigate } = useContext(AuthContext);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);

    if (!formdata.name || !formdata.email || !formdata.password) {
      toast.error("Please fill all the fields");
    }

    try {
      setLoading(true);
      const { data } = await AuthApi.post("/api/users/register", formdata);
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input
          type="text"
          className="input"
          placeholder="Name"
          value={formdata.name}
          onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={formdata.email}
          onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) =>
            setFormdata({ ...formdata, password: e.target.value })
          }
        />

        <button
          className="btn btn-neutral mt-4"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Register"
          )}
        </button>
      </fieldset>
    </div>
  );
};
export default Register;
