import Image from "next/image";

export default function FoodsPromo() {
  const promoItems = [
    {
      title: "Delivery Promo",
      image: "/promo1.jpg",
    },
    {
      title: "Korean Food Voucher",
      image: "/promo2.jpg",
    },
    {
      title: "FAUG BURGER",
      image: "/promo3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
            Promo
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Udah Kenyang, <p className="text-black-500">Banyak Promo Lagi~</p>
          </h2>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            See All &gt;
          </a>
        </div>

        {/* Grid promo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoItems.map((promo, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={promo.image}
                alt={promo.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
