
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-white mb-5">
              DigiTools
            </h2>

            <p className="max-w-sm leading-7 text-gray-400">
              Premium digital tools for creators,
              professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Integrations"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 mb-8">
              {[
                "Documentation",
                "Help Center",
                "Community",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mb-4">
              Social Links
            </h3>

            <div className="flex items-center gap-3">
<a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-purple-600 hover:text-white transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2026 DigiTools. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-white transition"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-white transition"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;