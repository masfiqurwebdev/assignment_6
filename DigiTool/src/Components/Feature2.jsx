import userIcon from "../assets/user.png";
import boxIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
   {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    icon: boxIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

export default function StepsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-sm p-6 relative hover:shadow-md transition"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-14 mt-8 h-14 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-6 h-6 object-contain "
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h3>

              <p className="text-gray-500 mb-8 text-sm mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}