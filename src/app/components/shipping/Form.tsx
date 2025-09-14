"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function Form() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const handleCheckShipping = () => {
    if (!fromCity || !toCity) {
      alert("Silakan isi kota awal dan kota tujuan");
      return;
    }
    alert(`Mengecek ongkir dari ${fromCity} ke ${toCity}...`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-12 mt-24">
      <div className="space-y-6">
        {/* From City */}
        <div className="relative">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-orange-500 mr-3" />
            <input
              type="text"
              placeholder="Kota Awal"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-orange-500 outline-none text-lg transition-colors"
            />
          </div>
        </div>

        {/* Connecting Line */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* To City */}
        <div className="relative">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-4 ml-1"></div>
            <input
              type="text"
              placeholder="Kota Tujuan"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full px-4 py-3 border-0 border-b-2 border-gray-200 focus:border-green-500 outline-none text-lg transition-colors"
            />
          </div>
        </div>

        {/* Check Button */}
        <div className="flex justify-center pt-6">
          <button
            onClick={handleCheckShipping}
            className="bg-gradient-to-r from-green-500 to-red-500 hover:from-green-600 hover:to-green-600 text-white px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Cek Ongkir
          </button>
        </div>
      </div>
    </div>
  );
}
