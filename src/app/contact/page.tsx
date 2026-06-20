"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organisation: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
            Let&apos;s Work Together
          </h1>
          <p className="mt-8 text-xl text-blue-100 max-w-2xl">
            Ready to transform your organisation&apos;s technology? Get in touch and
            our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Send Us a Message
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-8">
              Request a Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27 00 000 0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Your company or department"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
                >
                  <option value="">Select a service...</option>
                  <option>Managed IT Services</option>
                  <option>Cloud Solutions</option>
                  <option>Cybersecurity</option>
                  <option>Software Development</option>
                  <option>Networking and Infrastructure</option>
                  <option>IT Support and Maintenance</option>
                  <option>Hardware and Consumables</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-4 rounded-xl transition-colors duration-200"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm font-medium text-center">
                  Message sent successfully! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm font-medium text-center">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>

          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-8">
              Contact Information
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-gray-800 font-medium">+27 (0) 82 212 2354</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-gray-800 font-medium">kentwillinnov@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Address</p>
                  <p className="text-gray-800 font-medium">108 Osler Street, Danville</p>
                  <p className="text-gray-800 font-medium">Pretoria, 0183</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-5 text-blue-700">Business Hours</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Monday - Friday</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-5 text-xs text-gray-500">
                Emergency managed support is available 24/7 for contracted clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Prefer to talk directly?</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Call us on +27 (0) 82 212 2354 and speak to one of our consultants today.
          </p>
        </div>
      </section>
    </>
  );
}