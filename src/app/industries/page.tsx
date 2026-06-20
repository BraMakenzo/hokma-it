import Button from "@/components/Button";

const industries = [
  {
    name: "Government",
    icon: "🏛️",
    challenge: "Public sector organisations need secure, compliant and cost-effective ICT infrastructure.",
    solution:
      "We deliver managed IT services, infrastructure support and compliance-ready solutions to government departments and municipalities across South Africa.",
    capabilities: [
      "Secure network infrastructure",
      "Compliance & governance frameworks",
      "Help desk & managed support",
      "Cloud migration & hosting",
    ],
  },
  {
    name: "Corporate",
    icon: "🏢",
    challenge: "Large organisations require enterprise-grade technology that scales with growth and complexity.",
    solution:
      "Hokma IT provides end-to-end corporate IT solutions — from cloud architecture and cybersecurity to systems integration and digital transformation.",
    capabilities: [
      "Enterprise cloud solutions",
      "Cybersecurity & endpoint protection",
      "ERP & systems integration",
      "IT strategy & consulting",
    ],
  },
  {
    name: "Education",
    icon: "🎓",
    challenge: "Educational institutions need reliable, affordable technology that supports both learning and administration.",
    solution:
      "We deploy and manage technology platforms that improve connectivity, streamline administration and enable modern digital learning environments.",
    capabilities: [
      "Campus networking & Wi-Fi",
      "Device supply & management",
      "Learning platform support",
      "IT maintenance & support",
    ],
  },
  {
    name: "Healthcare",
    icon: "🏥",
    challenge: "Healthcare providers operate in high-stakes environments where downtime and data breaches are not an option.",
    solution:
      "We build and manage secure, resilient IT infrastructure that keeps healthcare operations running reliably and patient data protected.",
    capabilities: [
      "High-availability infrastructure",
      "Data security & backup",
      "Compliance-ready systems",
      "24/7 managed support",
    ],
  },
  {
    name: "SMEs",
    icon: "🚀",
    challenge: "Small and medium businesses need enterprise-quality IT without enterprise-level complexity or cost.",
    solution:
      "Hokma IT packages the right technology for your stage of growth — giving SMEs the tools, support and capability to compete and scale.",
    capabilities: [
      "Affordable managed IT",
      "Cloud & productivity tools",
      "Website & software development",
      "IT support & helpdesk",
    ],
  },
  {
    name: "Financial Services",
    icon: "🏦",
    challenge: "Financial institutions face strict regulatory requirements and are high-value targets for cyber threats.",
    solution:
      "We provide cybersecurity, compliance infrastructure and resilient IT systems designed for the unique demands of financial environments.",
    capabilities: [
      "Cybersecurity & threat monitoring",
      "Regulatory compliance support",
      "Secure data management",
      "Business continuity planning",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Technology Solutions Across Every Sector
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            Hokma IT understands that every industry has unique challenges.
            We deliver tailored ICT solutions that fit your sector, your scale
            and your goals.
          </p>
          <div className="mt-10">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>

      {/* Industry Detail Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Sector Expertise
          </span>
          <h2 className="text-4xl font-bold mt-3">Industries We Serve</h2>
        </div>

        {industries.map((industry, index) => (
          <div
            key={industry.name}
            className={`grid md:grid-cols-2 gap-12 items-start p-10 rounded-3xl border border-gray-100 shadow-sm ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div>
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">
                The Challenge
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {industry.challenge}
              </p>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">
                Our Approach
              </p>
              <p className="text-gray-600 leading-relaxed">
                {industry.solution}
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h4 className="font-bold text-blue-700 mb-6">
                Key Capabilities
              </h4>
              <ul className="space-y-4">
                {industry.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Don&apos;t see your industry?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We work with organisations of all types. Get in touch and let&apos;s
            discuss how Hokma IT can support your specific needs.
          </p>
          <div className="mt-8">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}