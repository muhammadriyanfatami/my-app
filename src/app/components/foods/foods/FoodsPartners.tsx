export default function FoodsPartners() {
  const foodPartners = [
    {
      name: "Mie Gacoan, Ponorogo",
      price: "25rb-35rb",
      category: "Bakmie",
      image: "/gacoan.png",
    },
    {
      name: "Mixue, Sultan Agung",
      price: "14rb-25rb",
      category: "Es krim",
      image: "/mixue.jpg",
    },
    {
      name: "Otty's Cafe, Sultan Agung",
      price: "15rb-45rb",
      category: "Cafe",
      image: "/otty.jpg",
    },
    {
      name: "Geprekinaja, Teuku Umar",
      price: "9rb-20rb",
      category: "Ayam",
      image: "/geprek.png",
    },
    {
      name: "Akademi Kopi, Ponorogo",
      price: "12rb-34rb",
      category: "Cafe",
      image: "/akademi.png",
    },
    {
      name: "Mbak Kebab, Ponorogo",
      price: "9rb-18rb",
      category: "Kebab",
      image: "/kebab.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Food Partners
          </h2>
          <a
            href="#"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600 font-medium"
          >
            See All &gt;
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Gambar */}
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-40 object-cover"
              />

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-black">
                    {partner.price}
                  </span>{" "}
                  <span className="text-gray-500">({partner.category})</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
