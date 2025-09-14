import Image from "next/image";

export default function FoodsExplorer() {
  const cuisineTypes = [
    { name: "Mie Ayam", image: "/mieayam.png" },
    { name: "Minuman", image: "/minuman.png" },
    { name: "Bakso", image: "/bakso.png" },
    { name: "Korea", image: "/korea.png" }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
            EXPLORE
          </span>
        </div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Aneka Kuliner Menarik
          </h2>
          <a
            href="#"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            See All
          </a>
        </div>
        <div className="flex justify-between items-center">
          {cuisineTypes.map((cuisine, index) => (
            <div key={index} className="text-center">
              {/* Gambar tanpa background circle */}
              <Image
                src={cuisine.image}
                alt={cuisine.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-3 object-cover"
              />
              <p className="text-sm font-medium text-gray-700">{cuisine.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
