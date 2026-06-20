const industries = [
  {
    name: "Government",
    icon: "🏛️",
    description:
      "Secure, compliant ICT infrastructure and managed services for public sector departments and municipalities.",
  },
  {
    name: "Corporate",
    icon: "🏢",
    description:
      "Enterprise-grade cloud, networking and software solutions that scale with your organisation.",
  },
  {
    name: "Education",
    icon: "🎓",
    description:
      "Technology platforms that support learning, administration and connectivity across institutions.",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    description:
      "Reliable, secure IT systems that keep critical healthcare operations running without interruption.",
  },
  {
    name: "SMEs",
    icon: "🚀",
    description:
      "Right-sized IT solutions that give small and medium businesses enterprise capability at an accessible cost.",
  },
  {
    name: "Financial Services",
    icon: "🏦",
    description:
      "Cybersecurity, compliance and infrastructure solutions built for the demands of financial environments.",
  },
];

export default function Industries() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Who We Work With
          </span>
          <h2 className="text-4xl font-bold mt-3">Industries We Serve</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Hokma IT delivers tailored technology solutions across a wide range
            of sectors throughout South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-shadow group"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-700 transition-colors">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}