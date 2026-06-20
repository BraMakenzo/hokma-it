import Image from "next/image";
import Link from "next/link";

const company = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Managed IT Services", href: "/services" },
  { name: "Cloud Solutions", href: "/services" },
  { name: "Cybersecurity", href: "/services" },
  { name: "Software Development", href: "/services" },
  { name: "Networking and Infrastructure", href: "/services" },
];

const industries = [
  { name: "Government", href: "/industries" },
  { name: "Corporate", href: "/industries" },
  { name: "Healthcare", href: "/industries" },
  { name: "Education", href: "/industries" },
  { name: "SMEs", href: "/industries" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-16 border-b border-gray-800">

          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/logo-transparent.png"
    alt="Hokma IT"
    width={140}
    height={46}
    className="h-10 w-auto bg-white rounded-lg p-1"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Intelligent IT solutions for government, enterprise and SME
              clients across South Africa.
            </p>
            <div className="mt-6 space-y-2 text-sm">
  <p>kentwillinnov@gmail.com</p>
  <p>+27 (0) 82 212 2354</p>
  <p>108 Osler Street, Danville, Pretoria, 0183</p>
  <p className="text-gray-600 text-xs mt-4">Reg No: 2012/133516/07</p>
</div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>2025 Hokma IT. All rights reserved.</p>
          <p>Intelligent IT Solutions — Pretoria, South Africa</p>
        </div>

      </div>
    </footer>
  );
}