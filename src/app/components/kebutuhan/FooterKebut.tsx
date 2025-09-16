"use client";
import React from "react";


export default function FoodsFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
                <img src="MT.png" alt="Logo" className="h-50 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">W</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">@</span>
              </div>
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-bold mb-4">Useful links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Blogs</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-bold mb-4">Main Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Offers</a></li>
              <li><a href="#" className="hover:text-white">Menus</a></li>
              <li><a href="#" className="hover:text-white">Reservation</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>example@email.com</li>
              <li>+64 958 248 966</li>
              <li>Social media</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 Dscode | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
