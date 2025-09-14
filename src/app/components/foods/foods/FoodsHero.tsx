export default function FoodsHero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
          
          {/* Text Section */}
          <div className="w-full md:w-auto md:max-w-sm text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-3">
              Apa Kata Mereka <br />
              Tentang Layanan <br />
              Food Delivery Kami?
            </h1>
            <p className="text-gray-700 text-lg mb-5">
              Cepat, hangat, dan aman sampai ke pelanggan.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-colors">
              Pesan Sekarang
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/kurirmerah.png"
              alt="Kurir Merah"
              className="object-contain max-w-[380px] md:max-w-[440px] scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}