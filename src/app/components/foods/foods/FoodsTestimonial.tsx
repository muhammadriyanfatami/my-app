import Image from "next/image";
import { Star } from "lucide-react";

export default function FoodsTestimonial() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
            FAQ
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bagian kiri (gambar + background hijau) */}
          <div className="relative flex justify-center">
            {/* Background hijau */}
            <div
              className="absolute"
              style={{
                width: "492px",
                height: "362px",
                backgroundColor: "#22c55e", // hijau tailwind green-500
                borderTopLeftRadius: "140px",
                borderTopRightRadius: "140px",
                borderBottomRightRadius: "41px",
                borderBottomLeftRadius: "41px",
              }}
            ></div>

            {/* Gambar orang */}
            <Image
              src="/senyum.png"
              alt="Customer"
              width={400}
              height={400}
              className="relative z-10 object-contain"
            />
          </div>

          {/* Bagian kanan (text + rating) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Our Customers Say About Us
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              &quot;Makanan disajikan dengan sepenuh hati dan rasa yang autentik.
              Pengiriman juga sangat cepat dan aman, sehingga makanan sampai
              dalam keadaan hangat dan segar. Sangat memuaskan!&quot;
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Image
                  src="/or2.png"
                  alt="user1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/or1.png"
                  alt="user2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/or3.png"
                  alt="user3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Customer Feedback</p>
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    4.8 (18.7k Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
