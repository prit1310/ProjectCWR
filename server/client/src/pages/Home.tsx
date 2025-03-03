import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate("/service");
    } else {
      navigate("/login"); 
    }
  };

  return (
    <div className="mt-16 p-6 text-center">
      <div className="bg-blue-600 text-white py-20 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Bachat Policy</h1>
        <p className="text-lg mb-6">Secure & Easy Payments for Two & Four-Wheeler Insurance</p>
        <button
        onClick={handleGetStarted}
        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200"
        >Get Started</button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Two & Four Wheeler Insurance</h2>
          <p className="text-gray-700 mb-4">
            Protect Your Ride with the Best Vehicle Insurance.<br />
            Drive with Confidence and Peace of Mind! When it comes to vehicle insurance, you need a plan that fits your 
            needs, budget, and lifestyle. Whether you’re looking for comprehensive coverage, collision protection, 
            or liability insurance, we’ve got you covered! Get insured today and stay protected on the road.
          </p>
          <p className="text-blue-600 font-semibold">Get a Quote Now!</p>
          <p className="text-gray-700">
            Don’t wait until it’s too late. Get your personalized quote today and enjoy the peace of mind that comes 
            with knowing your vehicle is covered.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Credit Card</h2>
          <p className="text-gray-700 mb-4">
            Unlock the Power of Your Spending with Our Credit Cards.<br/>
            Protect Your Ride with the Best Vehicle Insurance.
            Drive with Confidence and Peace of Mind! When it comes to vehicle insurance, you need a plan that fits your 
            needs, budget, and lifestyle. 
          </p>
          <p className="text-blue-600 font-semibold">Get a Quote Now!</p>
          <p className="text-gray-700">
            Don’t wait until it’s too late. Get your personalized quote today and enjoy the peace of mind that comes 
            with knowing your vehicle is covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
