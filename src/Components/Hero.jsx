import { Play } from "lucide-react";
import hero from '../assets/banner.png'
import dot from '../assets/dot.png'
const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-[#6C3BFF]">
           <img src={dot} alt="" className="mx-2" />  New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight text-[#2B3142] lg:text-6xl">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Access premium AI tools, design assets, templates, and
            productivity software—all in one place. Start creating faster
            today.
          </p>

          <p className="mt-2 text-lg text-gray-500">
            Explore Products
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#6C3BFF] px-7 py-3 font-semibold text-white transition hover:bg-[#5B2FF7]">
              Explore Products
            </button>

            <button className="flex items-center gap-2 rounded-full border border-[#6C3BFF] px-7 py-3 font-semibold text-[#6C3BFF] transition hover:bg-[#6C3BFF] hover:text-white">
              <Play size={16} fill="currentColor" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <img
              src={hero}
              alt="AI Technology"
              className="h-[500px] w-[450px] object-cover"
            />
          </div>

          {/* Optional Glow */}
          <div className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-[1px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;