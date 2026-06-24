import Button from "@/components/Button";
import Image from "next/image";

const categories = [
  {
    label: "IT Services",
    description:
      "Professional and managed IT services that keep your organisation running at peak performance.",
    cards: [
      {
        icon: "⚙️",
        title: "Professional Services",
        description:
          "Expert-led engagements that align your technology with your business objectives.",
        items: ["System Integration", "Training & Consulting"],
      },
      {
        icon: "🖥️",
        title: "Managed Services",
        description:
          "Fully managed IT operations so your team can focus on what matters most.",
        items: [
          "Proactive infrastructure monitoring",
          "Patch & update management",
          "Vendor & license management",
        ],
      },
    ],
  },
  {
    label: "IT Maintenance & Support",
    description:
      "Reliable hardware, software and application support that minimises downtime and maximises productivity.",
    cards: [
      {
        icon: "🔧",
        title: "Hardware Support",
        description:
          "On-site and remote hardware support to keep your devices and infrastructure operational.",
        items: [
          "Device repair & replacement",
          "Preventive maintenance",
          "Hardware lifecycle management",
        ],
      },
      {
        icon: "💾",
        title: "Software Support",
        description:
          "End-to-end software support from installation and configuration to troubleshooting.",
        items: [
          "Software installation & setup",
          "Licensing & compliance",
          "Performance optimisation",
        ],
      },
      {
        icon: "☁️",
        title: "Cloud Services",
        description:
          "Cloud infrastructure, backup and application services built for reliability and scale.",
        items: [
          "Cloud Services",
          "Backup and Disaster Recovery",
          "Help Desk Support Services",
          "Managed Print Services",
        ],
      },
      {
        icon: "🌐",
        title: "Development Services",
        description:
          "Custom-built digital solutions designed around your unique business requirements.",
        items: [
          "Website Design and Development",
          "Software Systems Design and Development",
        ],
      },
    ],
  },
  {
    label: "Supply of Consumables",
    description:
      "Quality hardware, software and office supplies sourced through our trusted distribution partners.",
    cards: [
      {
        icon: "🖨️",
        title: "IT Hardware & Software",
        description:
          "Procure the right technology products for your organisation through our established vendor network.",
        items: [
          "Computer Hardware and Software",
          "IT Accessories and Consumables",
          "Office and Stationery Supplies",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Services Built Around Your Business
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            From managed IT and cloud services to hardware supply and software
            development — Hokma IT covers every layer of your technology needs.
          </p>
          <div className="mt-10">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>

      {/* Visual Banner */}
<section className="max-w-7xl mx-auto px-6 pt-16">
  <div className="rounded-3xl overflow-hidden h-64">
    <Image
      src="/11.jpg"
      alt="Innovative IT solutions"
      width={1200}
      height={400}
      className="w-full h-full object-cover"
    />
  </div>
</section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">
                {cat.label}
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <p className="text-center text-gray-500 max-w-xl mx-auto mb-10">
              {cat.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.cards.map((card) => (
                <div
                  key={card.title}
                  className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-xl mb-2 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {card.description}
                  </p>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Not sure what you need?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Our team will assess your environment and recommend the right
            services for your organisation.
          </p>
          <div className="mt-8">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}