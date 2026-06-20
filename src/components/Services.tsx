import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Managed IT Services",
    description:
      "Fully managed IT operations with proactive monitoring, maintenance and support so your business never skips a beat.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Migrate and optimise your infrastructure on Azure or hybrid cloud environments with security and scalability built in.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description:
      "End-to-end protection from endpoint security to compliance frameworks, powered by Bitdefender and Avast Business.",
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Custom web applications and enterprise software built to your exact requirements using modern technology stacks.",
  },
  {
    icon: "🔗",
    title: "Systems Integration",
    description:
      "Connect your business systems into a unified, efficient platform that eliminates silos and improves visibility.",
  },
  {
    icon: "🚀",
    title: "Digital Transformation",
    description:
      "Strategic technology consulting and implementation that modernises your operations and drives competitive advantage.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-4xl font-bold mt-3">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A full spectrum of ICT services designed to keep your organisation
            secure, efficient and ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-2xl shadow-card border border-slate-100 hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <div className="w-12 h-1 bg-brand mb-4 rounded-full" />
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
          >
            View all services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}