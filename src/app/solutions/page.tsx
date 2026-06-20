import Button from "@/components/Button";

const solutions = [
  {
    category: "Cloud",
    title: "Cloud Solutions",
    description:
      "Migrate, manage and optimise your infrastructure on Azure, AWS or hybrid environments. We handle architecture, security and ongoing management.",
    outcomes: ["Reduced infrastructure costs", "99.9% uptime SLAs", "Scalable on demand"],
  },
  {
    category: "Security",
    title: "Cybersecurity",
    description:
      "End-to-end security from endpoint protection to compliance frameworks. Powered by our partnerships with Bitdefender and Avast Business.",
    outcomes: ["Threat detection & response", "Compliance readiness", "Employee security training"],
  },
  {
    category: "Software",
    title: "Software Development",
    description:
      "Custom web applications, system integrations and enterprise software built to your exact requirements using modern technology stacks.",
    outcomes: ["Tailored to your workflows", "Scalable architecture", "Full lifecycle support"],
  },
  {
    category: "Managed IT",
    title: "Managed IT Services",
    description:
      "Fully managed IT support so your team can focus on the business. From help desk to infrastructure monitoring — we've got it covered.",
    outcomes: ["Proactive monitoring", "Fast response times", "Predictable monthly costs"],
  },
  {
    category: "Networking",
    title: "Networking & Infrastructure",
    description:
      "Enterprise networking design, wireless deployment and infrastructure management for offices, campuses and multi-site organisations.",
    outcomes: ["Reliable connectivity", "Secure network design", "Remote management"],
  },
  {
    category: "Data",
    title: "Data Analytics & BI",
    description:
      "Turn your data into decisions. We design dashboards, reporting pipelines and business intelligence solutions that give you real visibility.",
    outcomes: ["Real-time dashboards", "Automated reporting", "Data-driven decisions"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Solutions Built for Your Business
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            From cloud migration to cybersecurity and custom software — Hokma IT
            delivers end-to-end technology solutions that move your organisation
            forward.
          </p>
          <div className="mt-10">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            What We Deliver
          </span>
          <h2 className="text-4xl font-bold mt-3">Our Solution Areas</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                {solution.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-blue-700 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Hokma IT */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Why Hokma IT
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              One partner for all your technology needs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rather than managing multiple vendors, Hokma IT gives you a single
              trusted partner across cloud, security, software, networking and
              support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We serve government departments, corporate organisations and SMMEs
              across South Africa — bringing enterprise-grade capability to
              every engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "Government", label: "Public Sector Ready" },
              { value: "Enterprise", label: "Corporate Scale" },
              { value: "SMME", label: "Right-sized for Growth" },
              { value: "24/7", label: "Managed Support" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-blue-700">{item.value}</div>
                <div className="mt-2 text-sm text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Not sure which solution fits?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Talk to our team and we&apos;ll recommend the right approach for your
            organisation&apos;s goals and budget.
          </p>
          <div className="mt-8">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}