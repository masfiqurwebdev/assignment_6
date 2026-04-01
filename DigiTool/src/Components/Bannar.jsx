import React from "react";

export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 linear-g-c from-indigo-600 via-purple-600 to-pink-500 text-white text-center">
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

        <p className="text-xs text-white/70">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}
