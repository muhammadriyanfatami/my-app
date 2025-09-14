import { Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500 p-8">
      {/* Box transparan (relative supaya bulatan bisa absolute terhadap box) */}
      <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-10 flex items-center justify-between w-full max-w-3xl text-white overflow-visible">
        {/* === Bulatan kecil berisi petir (overlap kiri) === */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20">
          <Zap className="w-6 h-6 text-yellow-500" />
        </div>

        {/* Teks di kiri */}
        <div className="flex-1 text-left pr-6">
          <h3 className="text-3xl font-bold mb-4 leading-snug">
            Your Logistics Partner <br /> for Seamless Delivery
          </h3>
          <p className="text-base opacity-90 max-w-xs">
            Fast, reliable, and efficient logistics solutions tailored for your business.
          </p>
        </div>

        {/* Gambar perempuan di dalam box (kanan) */}
        <div className="flex-shrink-0 w-[300px] md:w-[500px]">
          <img
            src="/perempuan.png"
            alt="Woman"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
