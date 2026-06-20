const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Clients Served" },
  { value: "24/7", label: "Managed Support" },
  { value: "99%", label: "Client Satisfaction" },
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