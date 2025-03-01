import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
    district: "",
    state: "",
  });

  const {storeTokenInLS} = useAuth();

  const navigate = useNavigate();

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(formData),
      });     

      const responseData = await response.json();

      if (response.ok) {
        toast.success("registration successfully");
        setFormData({ name: "", email: "", phone: "", password: "", district: "", state: "" });
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
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

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

          <div>
            <label className="block font-medium">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              required
            >
              <option value="">Select State</option>
              {statesOfIndia.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-blue-500"
              placeholder="Enter your district"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
