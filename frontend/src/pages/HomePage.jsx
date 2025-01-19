import { Link } from "react-router-dom";
import skImage from "../assets/sk.png"; // Import the image
import students from "../assets/students.png"; // Import the image
import programs from "../assets/programs.png"; // Import the image
import certificate from "../assets/certificate.png"; // Import the image
import Footer from "../pages/Footer"; // Adjust the path based on your folder structure


const HomePage = () => {
    return (
        <div className="min-h-screen relative flex flex-col items-center"
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adjust transparency
                     backdropFilter: 'blur(10px)', // Glass effect
        }}>
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${skImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.1, // Makes it subtle and premium
                    
                }}
            ></div>

            {/* Main Content */}
            <div className="relative z-10 w-full bg-gradient-to-r from-orange-100 via-white to-blue-100">
                {/* Header Section */}
                <div className="w-full max-w-7xl px-4 lg:px-16 py-8 flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold text-orange-600">
                            Welcome to RankBook
                        </h1>
                        <p className="mt-4 text-lg lg:text-2xl text-gray-700">
                            Your Gateway to Success
                        </p>
                        <div className="flex mt-6 gap-4 justify-center lg:justify-start">
                            <Link
                                to="/signup"
                                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all text-lg"
                            >
                                Signup
                            </Link>
                            <Link
                                to="/login"
                                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition-all text-lg"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="mt-8 text-gray-600 text-base lg:text-lg">
                            <p>🌟 8000+ Certified Students</p>
                            <p>🎓 15+ Courses & Programs</p>
                            <p>👨‍🏫 20+ Expert Faculties</p>
                        </div>
                    </div>

                    {/* Right Section - Placeholder for Image */}
                    <div style={{ marginTop: '70px' }}>
                    <div>
                      <img
                        src={skImage}
                        alt="Vision 2025"
                        className="responsive-image"
                      />
                    </div>
                    
                  </div>
                </div>

                {/* Features Section */}
                {/* Features Section */}
                <div className="w-full bg-gradient-to-b from-white to-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-6">
                            <img
                                src={students}
                                alt="Certified Students"
                                className="w-50 h-40 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">8000+ Certified Students</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Join a vast network of certified students excelling in their fields.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-6">
                            <img
                                src={certificate}
                                alt="Courses & Programs"
                                className="w-50 h-40 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">15+ Courses & Programs</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Explore a variety of courses designed for different career paths.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center p-6">
                            <img
                                src={programs}
                                alt="Expert Faculties"
                                className="w-50 h-40 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">20+ Expert Faculties</h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Learn from highly experienced faculties and mentors.
                            </p>
                        </div>
                    </div>
                    <footer />
                </div>
                    
            </div>
           
               <Footer />
        </div>
    );
};

export default HomePage;
