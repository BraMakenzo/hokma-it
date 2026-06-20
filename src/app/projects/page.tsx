import Button from "@/components/Button";

const projects = [
  {
    title: "IT & Technology Partnership",
    client: "Mausse Legacy (TA Legacy Stationers)",
    industry: "Retail",
    description:
      "Hokma IT has partnered with Mausse Legacy, trading as Legacy Stationers in Mogwase, supporting their technology and office supply needs.",
    tags: ["IT Services", "Office Supplies"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Our Projects
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            Real partnerships with real clients across South Africa.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-4">Client Partnerships</h2>
        <p className="text-gray-500 mb-12 max-w-2xl">
          We let our work speak for itself. Below are active client partnerships
          — more case studies will be added as engagements conclude.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                {project.industry}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-1">
                Client: {project.client}
              </p>
              <p className="text-gray-600 mt-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-gray-50">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-lg font-bold text-gray-500 mb-2">More Coming Soon</h3>
            <p className="text-sm text-gray-400">
              New client partnerships and case studies are being added regularly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Have a project in mind?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Let&apos;s discuss how Hokma IT can deliver results for your organisation.
          </p>
          <div className="mt-8">
            <Button text="Request Consultation" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}