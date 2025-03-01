import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

      const {storeTokenInLS} = useAuth();

      const navigate = useNavigate();
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();

            if (response.ok) {
                toast.success("login successfully");
                setFormData({ email: "", password: "" });
                storeTokenInLS(responseData.token)
                navigate("/")
            } else {
                toast.error(responseData.extraDetails ? responseData.extraDetails : responseData.message)
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

  return (
    <div className="h-screen w-screen bg-gray-100 overflow-hidden flex justify-center items-center pt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">

        <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
