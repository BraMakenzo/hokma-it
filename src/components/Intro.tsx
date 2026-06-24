import Link from "next/link";

export default function Intro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold mt-3 mb-6 leading-tight">
              South Africa&apos;s Trusted ICT Solutions Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hokma IT is a Pretoria-based, 100% Black-owned ICT company and
              B-BBEE Level 1 Contributor, operating since 2012 and delivering
              intelligent technology solutions to government, corporate and
              SMME clients across South Africa.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From cloud migration and cybersecurity to software development
              and managed IT support — we provide a single, trusted technology
              partner for every layer of your organisation&apos;s IT needs.
            </p>
            <div className="flex flex-wrap gap-6">
              {["B-BBEE Level 1", "100% Black-Owned", "Pretoria Based", "Established 2012"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
              >
                Learn more about us
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-700 rounded-3xl p-8 text-white text-center">
              <div className="text-5xl font-bold">2012</div>
              <div className="mt-2 text-sm text-blue-200 font-medium">Founded</div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-900">8+</div>
              <div className="mt-2 text-sm text-gray-500 font-medium">Clients Served</div>
            </div>
            <div className="bg-gray-50 rounded-3xl p-8 text-center border border-gray-100">
              <div className="text-5xl font-bold text-gray-900">3</div>
              <div className="mt-2 text-sm text-gray-500 font-medium">Market Segments</div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-700">L1</div>
              <div className="mt-2 text-sm text-blue-600 font-medium">B-BBEE Status</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}