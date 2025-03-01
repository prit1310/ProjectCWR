import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
const Navbar = () => {
  const {isLoggedIn} = useAuth();
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <ul className="flex space-x-6">
          <li><NavLink to="/" className="hover:text-yellow-400">Home</NavLink></li>
          <li><NavLink to="/dashboard" className="hover:text-yellow-400">Dashboard</NavLink></li>
          <li><NavLink to="/service" className="hover:text-yellow-400">Services</NavLink></li>
          <li><NavLink to="/report" className="hover:text-yellow-400">Reports</NavLink></li>
          <li><NavLink to="/payment" className="hover:text-yellow-400">Payout</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-yellow-400">Contact Us</NavLink></li>
          {isLoggedIn ? (
            <li><NavLink to="/logout" className="hover:text-yellow-400">Logout</NavLink></li>
          ) : (
            <>
              <li><NavLink to="/login" className="hover:text-yellow-400">Login</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
