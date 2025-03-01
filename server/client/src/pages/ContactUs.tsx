import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const {storeTokenInLS} = useAuth();

    const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
                const response = await fetch("/api/auth/contact", {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                const responseData = await response.json();
    
                if (response.ok) {
                    toast.success("Message sent successfully");
                    setFormData({ email: "", name: "" });
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
    <div className="bg-white p-8 md:p-12 lg:p-16 text-center mt-8">
      <h2 className="text-3xl font-bold text-black">Contact Us</h2>
      <p className="text-gray-600 mt-2">Any questions or remarks? Just write us a message!</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
        <div className="flex flex-col md:flex-row md:justify-center gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter a valid email address"
            className="w-full md:w-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full md:w-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <button type="submit" className="w-[550px] mt-4 bg-teal-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-teal-600 transition">
          SUBMIT
        </button>
      </form>

      <div className="mt-12 bg-teal-400 text-white p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041885.png" alt="Running Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-bold mt-4">ABOUT CLUB</h3>
          <p className="text-center">Running Guide<br />Workouts</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/126/126341.png" alt="Phone Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-bold mt-4">PHONE (LANDLINE)</h3>
          <p className="text-center">+912 3 567 8987<br />+912 5 252 3336</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-bold mt-4">OUR OFFICE LOCATION</h3>
          <p className="text-center">S 16/7  Sector 16 Near Munshi Pulia Metro Station,<br />Indira Nagar  Lucknow, 226016</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
