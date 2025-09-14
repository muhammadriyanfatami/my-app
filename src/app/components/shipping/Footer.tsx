import { Mail, Phone, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative mr-4">
                <div className="text-3xl font-black text-white transform -skew-x-6"></div>
                <div className="text-3xl font-black text-white transform -skew-x-6 absolute top-0 left-2"></div>
              </div>
              <div className="flex flex-col">
                <img src="MT.png" alt="MT TRANS Logo" />
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">About us</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Events</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Blogs</a>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Main Menu</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Offers</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Menus</a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">example@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3" />
                <span className="text-gray-300">+64 958 248 966</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Social media</h4>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
    