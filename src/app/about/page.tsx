import Button from "@/components/Button";

const values = [
  {
    title: "Innovation",
    description:
      "We continuously adopt cutting-edge technologies to keep our clients ahead of the curve.",
  },
  {
    title: "Reliability",
    description:
      "Our clients trust us to deliver on time, every time — with measurable, lasting results.",
  },
  {
    title: "Security",
    description:
      "We build with security at the core, protecting your people, data, and infrastructure.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside our clients as a long-term technology partner, not just a vendor.",
  },
];

const stats = [
  { value: "2012", label: "Year Founded" },
  { value: "8+", label: "Clients Served" },
  { value: "3", label: "Market Segments Served" },
  { value: "Level 1", label: "B-BBEE Contributor" },
];

const partners = [
  "Tarsus Distribution",
  "Bitdefender",
  "Avast Business",
  "AVG Business",
  "First Distribution",
  "Lenovo",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            About Hokma IT
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            Intelligent IT solutions built on a foundation of trust, experience
            and technical excellence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Your trusted technology partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hokma IT is a Pretoria-based information technology company,
              operating since 2012 and delivering enterprise-grade ICT
              solutions to government, corporate and SMME clients across South
              Africa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide a full spectrum of technology services — from cloud
              and cybersecurity to software development, networking and managed
              IT support — using modern, proven technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach is built on close client partnerships, professional
              delivery and a genuine commitment to the long-term success of
              every organisation we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-blue-50 rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold text-blue-700">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be the ICT partner of choice by delivering quality, timely and
              professional technology solutions — from website development and
              software integration to cloud services and managed IT support —
              that contribute tangibly to the success of our clients.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-blue-700">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To envision, design and build next-generation IT services that
              empower organisations to grow, compete and lead — grounded in
              quality, transparency and corporate responsibility at every
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            What We Stand For
          </span>
          <h2 className="text-4xl font-bold mt-3">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-blue-700">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* B-BBEE */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-widest">
                Transformation & Compliance
              </span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">
                100% Black-Owned — B-BBEE Level 1 Contributor
              </h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                As a 100% Black-owned, B-BBEE Level 1 Contributor offering 135%
                procurement recognition, we are committed to South Africa&apos;s
                transformation agenda. Partnering with us contributes directly to
                your B-BBEE procurement scorecard — delivering technological
                excellence and regulatory alignment in a single, high-value
                engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-white">Level 1</div>
                <div className="mt-2 text-sm text-blue-200 font-medium">B-BBEE Contributor</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="mt-2 text-sm text-blue-200 font-medium">Black-Owned</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm col-span-2">
                <div className="text-2xl font-bold text-white">135% Procurement Recognition</div>
                <div className="mt-2 text-sm text-blue-200 font-medium">
                  Maximum value contribution to your B-BBEE scorecard
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Trusted Partnerships
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Our Technology Partners
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            We work with industry-leading technology vendors to deliver the
            best solutions to our clients.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="bg-white border border-gray-200 rounded-xl px-8 py-4 text-sm font-semibold text-gray-700 shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to work with us?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Let&apos;s build something great together. Talk to our team about your
            next technology project.
          </p>
          <div className="mt-8">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}