"use client";

import { Search, Menu, ChevronDown, Link } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-transparent text-white px-3 py-2 rounded font-bold text-xl">
              <img src="MT.png" alt="mt logo" className="h-30 w-auto" />
            </div>
            <span className="ml-2 text-black font-semibold text-lg"></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="home" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">Home</Link>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Pricing <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" />
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Muhammad Riyan F.
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <a href="/" className="text-orange-500 font-medium py-2">Home</a>
              <a href="#" className="text-gray-700 font-medium py-2">Pricing</a>
              <a href="#" className="text-gray-700 font-medium py-2">Services</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
