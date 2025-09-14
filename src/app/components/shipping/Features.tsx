import { MapPin, Phone, Mail } from "lucide-react";

export default function Features() {
  return (
    <section className="mt-20"> {/* Biar nggak ketutupan header */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Pengiriman Cepat</h3>
          <p className="text-gray-600">Layanan pengiriman ekspres ke seluruh Indonesia</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Tracking Real-time</h3>
          <p className="text-gray-600">Pantau paket Anda secara real-time 24/7</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Aman & Terpercaya</h3>
          <p className="text-gray-600">Jaminan keamanan barang hingga tujuan</p>
        </div>
      </div>
    </section>
  );
}
