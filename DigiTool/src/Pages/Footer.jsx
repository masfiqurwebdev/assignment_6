import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-sm md:text-base text-white/80 mb-8">
          Join thousands of professionals who are boosting productivity using our tools. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        <p className="text-xs text-white/70">
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

// Footer Section
export function Footer() {
  return (
    <footer className="w-full bg-[#0B1A2B] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DigiTools</h3>
            <p className="text-white/70 text-sm max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
