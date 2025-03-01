import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-16 p-6 text-center">
      <div className="bg-blue-600 text-white py-20 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Insurance Pay</h1>
        <p className="text-lg mb-6">Secure & Easy Payments for Two & Four-Wheeler Insurance</p>
        <Link
          to="/dashboard"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200"
        >
          Get Started
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Two-Wheeler Insurance</h2>
          <p className="text-gray-700">Protect your bike with our comprehensive plans.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Four-Wheeler Insurance</h2>
          <p className="text-gray-700">Get hassle-free car insurance with easy renewals.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
