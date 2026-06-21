const stats = [
  { value: "2012", label: "Founded" },
  { value: "8+", label: "Clients Served" },
  { value: "Level 1", label: "B-BBEE Contributor" },
  { value: "100%", label: "Black-Owned" },
];

export default function Stats() {
  return (
    <section className="bg-brand text-white py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold">{stat.value}</h3>
              <p className="mt-2 text-blue-200 text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}