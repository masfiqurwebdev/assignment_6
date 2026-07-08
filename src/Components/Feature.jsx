

import { UserRound,  Package, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: UserRound,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: Package,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];

const Feature = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h2>

          <p className="mt-3 text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-xl border border-gray-200 bg-white px-8 py-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#6C3BFF] text-xs font-semibold text-white">
                  {step.id}
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
                  <Icon size={36} className="text-[#6C3BFF]" strokeWidth={2} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {step.description}
                </p>
              </div>

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
