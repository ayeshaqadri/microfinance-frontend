import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-sky-600 shadow-lg p-4 text-white flex justify-between items-center">
      <div className="font-extrabold text-2xl tracking-wide">
        <Link to="/" className="hover:text-yellow-300 transition-colors">Microfinance</Link>
      </div>
      <div className="space-x-4 flex items-center">
        <Link
          to="/login"
          className="hover:bg-white hover:text-blue-600 px-3 py-1 rounded transition-all duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="hover:bg-white hover:text-blue-600 px-3 py-1 rounded transition-all duration-200"
        >
          Register
        </Link>
        <Link
          to="/dashboard"
          className="hover:bg-white hover:text-blue-600 px-3 py-1 rounded transition-all duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/apply"
          className="hover:bg-white hover:text-blue-600 px-3 py-1 rounded transition-all duration-200"
        >
          Apply Loan
        </Link>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-700 hover:bg-yellow-300 hover:text-black font-semibold px-4 py-1 rounded transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
