import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use Heroicons/Lucide
import logo from "./img/1.png"; // Replace with your actual logo path

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto sm:h-12"
            />
            <span className="ml-3 text-xl sm:text-2xl font-bold text-gray-800">
              Waqar Hussain Ujjan
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <a href="#home" className="block py-2 text-gray-700">Home</a>
          <a href="#products" className="block py-2 text-gray-700">Products</a>
          <a href="#contact" className="block py-2 text-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Home;