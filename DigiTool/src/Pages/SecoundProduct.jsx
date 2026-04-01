const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Access to free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 relative transition shadow-sm ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105 shadow-lg"
                  : "bg-white"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full text-black">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-gray-200" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ml-1 ${
                    plan.highlight ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <span
                      className={
                        plan.highlight ? "text-white" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full mt-6 py-2 rounded-full font-medium transition ${
                  plan.highlight
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}