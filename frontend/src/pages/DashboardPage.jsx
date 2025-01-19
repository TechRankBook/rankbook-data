import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-black">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Menu Heading */}
          <h2
            className="text-2xl font-bold text-green-400 cursor-pointer"
            onClick={() => navigate("/dashboard")} // Navigate to homepage
          >
            Home
          </h2>
          <div>
            <h3 className="text-lg font-semibold text-green-300 mb-2">
              Profile
            </h3>
            <p className="text-gray-300">Name: {user.name}</p>
            <p className="text-gray-300">Email: {user.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-300 mb-2">
              Account Activity
            </h3>
            <p className="text-gray-300">
              <span className="font-bold">Joined: </span>
              {new Date(user.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Last Login: </span>
              {formatDate(user.lastLogin)}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-700 text-white 
              font-bold rounded-lg shadow hover:from-red-600 hover:to-red-800"
          >
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div
        className={`transition-transform ${
          isSidebarOpen ? "ml-64" : ""
        } duration-300`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
        >
          <button
            onClick={toggleSidebar}
            className="mb-4 py-2 px-4 bg-green-500 text-white font-bold rounded-lg"
          >
            Menu Sidebar
          </button>
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
            Register Your Course
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-700 cursor-pointer"
              onClick={() => navigate("/ug")}
            >
              <h3 className="text-xl font-semibold text-green-400">UG</h3>
              <p className="text-gray-300 mt-2">
                Undergraduate courses for students.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-700 cursor-pointer"
              onClick={() => navigate("/pg")}
            >
              <h3 className="text-xl font-semibold text-green-400">PG</h3>
              <p className="text-gray-300 mt-2">
                Postgraduate courses for advanced learning.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-700 cursor-pointer"
              onClick={() => navigate("/engineering")}
            >
              <h3 className="text-xl font-semibold text-green-400">
                ENGINEERING
              </h3>
              <p className="text-gray-300 mt-2">
                Engineering-specific diploma and degree programs.
              </p>
            </div>
            <div
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-gray-700 cursor-pointer"
              onClick={() => navigate("/diploma")}
            >
              <h3 className="text-xl font-semibold text-green-400">DIPLOMA</h3>
              <p className="text-gray-300 mt-2">
                Diploma programs for specialized skills.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
