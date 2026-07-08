
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    duration: "/Month",
    button: "Get Started Free",
    featured: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    duration: "/Month",
    button: "Start Pro Trial",
    featured: true,
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    duration: "/Month",
    button: "Contact Sales",
    featured: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
  },
];



const Packages = () => {
  return (
    
    <section className="bg-white py-20">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>

          <p className="mt-3 text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}

              className={`relative rounded-2xl border p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.featured
                  ? "border-transparent bg-gradient-to-br from-[#5D2EFF] via-[#7A2BFF] to-[#A61DFF] text-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-gray-900">
                  {plan.badge}

                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.subtitle}

              </p>

              <div className="mt-6 flex items-end">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`mb-1 ml-1 ${
                    plan.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {plan.duration}

                </span>
              </div>


              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check
                      size={18}
                      className={
                        plan.featured
                          ? "text-green-300"
                          : "text-green-500"
                      }
                    />
                    <span
                      className={
                        plan.featured ? "text-white" : "text-gray-600"
                      }

                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button

                className={`mt-10 w-full rounded-full py-3 font-semibold transition ${
                  plan.featured
                    ? "bg-white text-[#6C3BFF] hover:bg-gray-100"
                    : "bg-gradient-to-r from-[#5D2EFF] to-[#A61DFF] text-white hover:opacity-90"
                }`}
              >

                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
