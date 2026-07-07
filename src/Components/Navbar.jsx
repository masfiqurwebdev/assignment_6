import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-4xl font-bold text-[#6C3BFF]">
          DigiTools
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-gray-700 md:flex">
          <a href="#" className="hover:text-[#6C3BFF] transition">
            Products
          </a>
          <a href="#" className="hover:text-[#6C3BFF] transition">
            Features
          </a>
          <a href="#" className="hover:text-[#6C3BFF] transition">
            Pricing
          </a>
          <a href="#" className="hover:text-[#6C3BFF] transition">
            Testimonials
          </a>
          <a href="#" className="hover:text-[#6C3BFF] transition">
            FAQ
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <button className="text-gray-700 hover:text-[#6C3BFF] transition">
            <ShoppingCart size={18} />
          </button>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-[#6C3BFF]"
          >
            Login
          </a>

          <button className="rounded-full bg-[#6C3BFF] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#5b2ff7]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;