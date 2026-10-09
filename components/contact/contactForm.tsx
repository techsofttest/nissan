"use client";

import { useState, useRef, useEffect } from "react";

function BuildingIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M9 18h.01M15 18h.01" />
    </svg>
  );
}
function ChevronDown() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7 5 5 5-5" />
    </svg>
  );
}
interface Admin {
  admin?: {
    title: string;
    content: string;
    detail: {
      title: string;
      option: string;
      description: string;
    }[];
  };
  service:[];
}

export default function ContactForm({ admin ,service}: Admin) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
const [serviceOpen, setServiceOpen] = useState(false);
  const services = [
    "Accounting, Taxation & Business Financial Services",
    "Business Registrations & Statutory Compliance",
    "Intellectual Property, Quality & Specialized Registrations",
    "Business Consultancy, Projects, Licensing & Growth Support",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${baseUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(
          data.message || "Unable to send your enquiry. Please try again."
        );
      }

      setSuccess(
        data.message ||
          "Thank you for your enquiry. We will get back to you shortly."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-[#D7E8E6] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

        {/* Administration */}
        <aside>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#276F70]">
            {admin?.title}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#102D33]">
            Speak with the team
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#4A5C5E]">
            For enquiries relating to consultancy, training or business
            opportunities, you may contact the administration directly.
          </p>

          <div className="mt-8 space-y-4">
            {admin?.detail?.map((person, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-[#D7E8E6] bg-[#F3FBFB] p-5"
              >
                <div className="flex items-center gap-3 text-[#5FAAAD]">
                  <BuildingIcon />

                  <p className="text-xs font-bold uppercase tracking-[0.16em]">
                    {person.option}
                  </p>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-[#102D33]">
                  {person.title}
                </h3>

                <p className="mt-1 text-sm text-[#4A5C5E]">
                  Mobile:{" "}
                  <a
                    href={`tel:${person.description.replace(/\D/g, "")}`}
                    className="font-medium text-[#276F70] hover:text-[#102D33]"
                  >
                    {person.description}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </aside>

        {/* Contact Form */}
        <div className="rounded-[1.75rem] border border-[#D7E8E6] bg-[#F8FCFC] p-7 sm:p-9">
          <h2 className="text-2xl font-semibold tracking-tight text-[#102D33]">
            Send us a message
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#4A5C5E]">
            Share your enquiry and we will get back to you at the earliest.
          </p>

          {/* Success */}
          {success && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm font-medium text-green-700">
                {success}
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm font-medium text-red-700">
                {error}
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5 sm:grid-cols-2"
          >
            {/* Name */}
            <label className="block text-sm font-medium text-[#102D33]">
              Full name <span className="text-red-500">*</span>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-[#D7E8E6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#94A3A3] focus:border-[#5FAAAD] focus:ring-2 focus:ring-[#5FAAAD]/20"
              />
            </label>

            {/* Email */}
            <label className="block text-sm font-medium text-[#102D33]">
              Email <span className="text-red-500">*</span>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-[#D7E8E6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#94A3A3] focus:border-[#5FAAAD] focus:ring-2 focus:ring-[#5FAAAD]/20"
              />
            </label>

            {/* Phone */}
            <label className="block text-sm font-medium text-[#102D33]">
              Phone

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded-xl border border-[#D7E8E6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#94A3A3] focus:border-[#5FAAAD] focus:ring-2 focus:ring-[#5FAAAD]/20"
              />
            </label>

            {/* Service */}
           <label className="block text-sm font-medium text-[#102D33]">
  Service <span className="text-red-500">*</span>

  <div className="relative mt-2">
    {/* Selected value */}
    <button
      type="button"
      onClick={() => setServiceOpen((prev) => !prev)}
      className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${
        serviceOpen
          ? "border-[#5FAAAD] ring-2 ring-[#5FAAAD]/20"
          : "border-[#D7E8E6] hover:border-[#A9CECB]"
      }`}
    >
      <span
        className={
          formData.service
            ? "text-[#102D33]"
            : "text-[#94A3A3]"
        }
      >
        {formData.service || "Select a service"}
      </span>

      <span
        className={`text-[#276F70] transition-transform duration-200 ${
          serviceOpen ? "rotate-180" : ""
        }`}
      >
        <ChevronDown />
      </span>
    </button>

    {/* Dropdown */}
    {serviceOpen && (
      <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#D7E8E6] bg-white shadow-xl shadow-[#102D33]/10">
        <div className="max-h-64 overflow-y-auto p-1.5">
          {service.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  service: item,
                }));
                setServiceOpen(false);
              }}
              className={`group flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                formData.service === item
                  ? "bg-[#EAF5F4] text-[#276F70]"
                  : "text-[#43515A] hover:bg-[#F3FBFB] hover:text-[#276F70]"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  formData.service === item
                    ? "bg-[#5FAAAD] text-white"
                    : "bg-[#E1F0EF] text-[#276F70] group-hover:bg-[#D5EBE9]"
                }`}
              >
                {index + 1}
              </span>

              <span className="leading-5">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</label>

            {/* Message */}
            <label className="block text-sm font-medium text-[#102D33] sm:col-span-2">
              Message <span className="text-red-500">*</span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell us about your requirement..."
                className="mt-2 w-full resize-none rounded-xl border border-[#D7E8E6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#94A3A3] focus:border-[#5FAAAD] focus:ring-2 focus:ring-[#5FAAAD]/20"
              />
            </label>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center rounded-full bg-[#102D33] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5FAAAD] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}