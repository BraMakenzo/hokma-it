const reasons = [
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "We build security into every solution — from endpoint protection to compliance frameworks — keeping your data and infrastructure safe.",
  },
  {
    icon: "📈",
    title: "Scalable Solutions",
    description:
      "Our solutions grow with your organisation, whether you're an SMME scaling up or an enterprise managing complex infrastructure.",
  },
  {
    icon: "👥",
    title: "Expert Team",
    description:
      "Our certified engineers and consultants bring deep technical expertise across cloud, networking, cybersecurity and software development.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    description:
      "Round-the-clock managed support ensures your systems stay operational and issues are resolved before they impact your business.",
  },
  {
    icon: "🤝",
    title: "Trusted Partnerships",
    description:
      "We partner with industry leaders like Lenovo, Bitdefender and Avast to deliver proven, best-in-class technology to our clients.",
  },
  {
    icon: "🎯",
    title: "Client-First Approach",
    description:
      "We work closely with every client to understand their goals and deliver solutions that create real, measurable business value.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            The Hokma IT Difference
          </span>
          <h2 className="text-4xl font-bold mt-3">Why Choose Hokma IT</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We combine technical depth, reliable delivery and genuine
            partnership to help organisations get the most from their
            technology investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-700 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}