import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="text-3xl font-bold text-[#6C3BFF]">
          DigiTools

        </a>


        <div className="hidden items-center gap-8 lg:flex">
          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            Products
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            Features
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            Pricing
          </a>


          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            Testimonials
          </a>
          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            FAQ
          </a>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <ShoppingCart

            size={18}
            className="cursor-pointer hover:text-[#6C3BFF]"
          />

          <a href="#" className="text-sm font-medium hover:text-[#6C3BFF]">
            Login
          </a>

          <button className="rounded-full bg-[#6C3BFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5A2EF7]">
            Get Started
          </button>
        </div>

        <button
          onClick={() =>  setIsOpen(!isOpen)}
          className="lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-116 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 bg-white px-6 py-6">
          <a href="#">Products</a>

          <a href="#">Features</a>
          <a href="#">Pricing</a>

          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>

          <hr />

          <div className="flex  items-center gap-3">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </div>

          <a href="#">Login

          </a>

          <button className="rounded-full bg-[#6C3BFF] py-3 font-semibold text-white">
            Get Started

          </button>
        </div>

      </div>

    </nav>
  );
}