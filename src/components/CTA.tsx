import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-24">

      <div className="max-w-container mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Transform Your Technology?
        </h2>

        <p className="mt-6 text-lg text-slate-600">
          Partner with Hokma IT to build secure,
          scalable and future-ready solutions.
        </p>

        <div className="mt-8">
          <Button
            text="Request Consultation"
            href="/contact"
          />
        </div>

      </div>

    </section>
  );
}