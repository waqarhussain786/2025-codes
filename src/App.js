import React, { useState } from 'react';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white p-4">
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-3 md:mb-4 animate-fade-in-down">Welcome to Our Website!</h2>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 animate-fade-in-up">
        Explore our amazing services and offerings. We're glad to have you here.
      </p>
      <button className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-sm md:text-base">
        Learn More
      </button>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-white p-4">
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-3 md:mb-4 animate-fade-in-down">About Us</h2>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 animate-fade-in-up">
        We are a passionate team dedicated to providing top-notch solutions. Our mission is to empower businesses and individuals through innovative technology.
      </p>
      <button className="px-6 py-2 md:px-8 md:py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 text-sm md:text-base">
        Our Vision
      </button>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-white p-4">
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-3 md:mb-4 animate-fade-in-down">Our Services</h2>
      <ul className="text-base md:text-lg text-gray-700 leading-relaxed list-disc list-inside mb-4 md:mb-6 animate-fade-in-up space-y-1 md:space-y-2">
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Digital Marketing</li>
        <li>Cloud Solutions</li>
      </ul>
      <button className="px-6 py-2 md:px-8 md:py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 text-sm md:text-base">
        Get a Quote
      </button>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-white p-4">
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl text-center max-w-sm md:max-w-md lg:max-w-lg w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-800 mb-3 md:mb-4 animate-fade-in-down">Contact Us</h2>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 animate-fade-in-up">
        Have questions? Feel free to reach out to us. We'd love to hear from you!
      </p>
      <p className="text-base md:text-lg text-gray-700 mb-2">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">Phone: +1 (123) 456-7890</p>
      <button className="px-6 py-2 md:px-8 md:py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition duration-300 transform hover:scale-105 text-sm md:text-base">
        Send Message
      </button>
    </div>
  </div>
);

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    console.log('Signup Details:', { name, email, password });
    setSuccess('Account created successfully!');

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-white p-4">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl text-center max-w-sm md:max-w-md lg:max-w-lg w-full border border-gray-200 mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-4 md:mb-6">Sign Up</h2>
        {error && <p className="text-red-600 mb-3 md:mb-4 font-medium text-sm md:text-base">{error}</p>}
        {success && <p className="text-green-600 mb-3 md:mb-4 font-medium text-sm md:text-base">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 text-sm font-semibold mb-1 md:mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 text-sm md:text-base"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-gray-700 text-sm font-semibold mb-1 md:mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 text-sm md:text-base"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-left text-gray-700 text-sm font-semibold mb-1 md:mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 text-sm md:text-base"
              placeholder="Min 8 characters"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-left text-gray-700 text-sm font-semibold mb-1 md:mb-2">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition duration-200 text-sm md:text-base"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 md:py-3 bg-pink-600 text-white font-bold rounded-lg shadow-md hover:bg-pink-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 text-base md:text-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 md:mt-6 text-gray-600 text-xs md:text-sm">
          Already have an account? <a href="#" className="text-pink-600 hover:underline font-semibold">Log In</a>
        </p>
      </div>
    </div>
  );
};


// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'signup':
        return <SignUpPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Navbar Section */}
      <nav className="bg-white shadow-lg p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="text-xl md:text-2xl font-bold text-gray-800 rounded-md p-1 md:p-2 hover:bg-gray-100 transition duration-300">
            Waqar Hussain Ujjan
          </div>

          {/* Mobile menu button */}
          <div className="block lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Navigation links - visible on large screens, toggled on small screens */}
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 items-center">
              <button
                onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
                className={`text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 rounded-md px-3 py-2 w-full text-center lg:w-auto
                  ${currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
                className={`text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 rounded-md px-3 py-2 w-full text-center lg:w-auto
                  ${currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => { setCurrentPage('services'); setIsMenuOpen(false); }}
                className={`text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 rounded-md px-3 py-2 w-full text-center lg:w-auto
                  ${currentPage === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                Services
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
                className={`text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-300 rounded-md px-3 py-2 w-full text-center lg:w-auto
                  ${currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
              >
                Contact
              </button>
              <button
                onClick={() => { setCurrentPage('signup'); setIsMenuOpen(false); }}
                className={`text-white bg-blue-600 hover:bg-blue-700 font-bold text-lg py-2 px-5 rounded-full shadow-md transition duration-300 transform hover:scale-105 w-full text-center mt-3 lg:mt-0 lg:ml-4 lg:w-auto
                  ${currentPage === 'signup' ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content Section */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Section (Optional) */}
      <footer className="bg-gray-800 text-white p-4 md:p-6 text-center mt-auto text-sm md:text-base">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;