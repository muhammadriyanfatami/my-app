"use client";

import { useState } from "react";
import { ChevronDown, Link, Search, User } from "lucide-react";

export default function HeaderKebutuhan() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <img src="MT.png" alt="Logo" className="h-35 w-auto" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="home" className="text-orange-500 font-medium">
              HOME
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() =>
                  setActiveMenu((prev) =>
                    prev === "pricing" ? null : "pricing"
                  )
                }
              >
                Pricing <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() =>
                  setActiveMenu((prev) =>
                    prev === "services" ? null : "services"
                  )
                }
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <Search className="h-5 w-5 text-gray-400" />
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-sm text-gray-700">Muhammad Riyan f.</span>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-10 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
