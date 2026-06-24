import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-hero-gradient text-white">
      <div className="max-w-container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-6">
            Intelligent IT Solutions — South Africa
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Technology Solutions That Power Tomorrow&apos;s Organisations
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl leading-relaxed">
            Secure, scalable and innovative IT services designed to accelerate
            digital transformation across government, enterprise and SMEs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button text="Request Consultation" href="/contact" />
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Explore Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}