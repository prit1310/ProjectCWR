import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; // Prevents rendering while redirecting
  }

  return (
    <div className="mt-16 p-6">
      <h1 className="text-4xl font-bold mb-4">Insurance Services</h1>
      <div className="grid grid-cols-2 gap-6">
        <a href="https://inr.deals/DR71pZ" target="_blank">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Two-Wheeler Insurance</h2>
            <p className="text-gray-700">Protect your bike with our comprehensive plans.</p>
          </div>
        </a>
        <a href="https://inr.deals/8cgoK7" target="_blank">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Four-Wheeler Insurance</h2>
            <p className="text-gray-700">Get hassle-free car insurance with easy renewals.</p>
          </div>
        </a>
      </div>

      <div className="mt-2 p-6">
        <h1 className="text-4xl font-bold mb-4">Credit Card Services</h1>
        <div className="grid grid-cols-2 gap-6">
          <a href="https://inr.deals/LVRHTM" target="_blank">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Credit Card</h2>
              <p className="text-gray-700">HDFC Bank</p>
            </div>
          </a>
          <a href="https://inr.deals/iL4qEf" target="_blank">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold">Credit Card</h2>
              <p className="text-gray-700">SBI Bank</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
