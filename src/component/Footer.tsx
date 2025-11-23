import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentor</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span className="font-semibold">Email:</span> info@example.com
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-emerald-600 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-600 transition">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Our Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form className="flex flex-col sm:flex-row ">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 md:rounded-l-2xl mb-1 border border-gray-300 focus:outline-none focus:border-emerald-500 text-sm flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 mb-1 text-white font-medium md:rounded-r-2xl hover:bg-emerald-700 transition "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>
            © Copyright
            <span className="font-semibold text-gray-900">Mentor</span>. All
            Rights Reserved
          </p>
          <p className="mt-1">
            Designed by <span className="text-emerald-600">BootstrapMade</span>
            Distributed by <span className="text-emerald-600">ThemeWagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
