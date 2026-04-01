import React from 'react'

const Footer = () => {
  return (
          <footer className="bg-[#0B1220] text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              DigiTools
            </h3>
            <p className="text-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Social Links</h4>
            <div className="flex gap-3">
              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaYoutube />
              </div>
              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </footer>
  )
}

export default Footer
