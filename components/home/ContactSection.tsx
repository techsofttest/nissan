"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
interface ContactSectionProps {
  contact: any;
  service: string[];
}
export default function ContactSection({ contact ,service}: { contact: any,service:any[] }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Business Registration",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Phone field - numbers only
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "");

      setFormData((prev) => ({
        ...prev,
        phone: numbersOnly,
      }));

      return;
    }

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

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/form`;

  console.log("API URL:", apiUrl);

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        category: formData.category,
        message: formData.message,
      }),
    });

    console.log("Response status:", response.status);

    const data = await response.json();

    console.log("Response data:", data);

    if (!response.ok) {
      throw new Error(
        data?.message ||
        data?.error ||
        "Something went wrong. Please try again."
      );
    }

    setSuccess(
      data?.message || "Thank you! Your enquiry has been submitted."
    );

    setFormData({
      name: "",
      phone: "",
      category: "Business Registration",
      message: "",
    });

  } catch (err: any) {
    console.error("FORM ERROR:", err);

    setError(
      err?.message ||
      "Unable to submit your enquiry. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="relative bg-white text-[#101820] overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[600px]">

        {/* LEFT SIDE */}
        <div className="relative lg:col-span-6 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden">

          <div className="absolute inset-0 z-0">
            <img
              src={contact.image || "contact/c1.png"}
              alt="Get In Touch"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#0F2628]/45" />
          </div>

          <ScrollReveal
            direction="left"
            className="relative z-10 max-w-xl w-full"
          >
            <div className="space-y-3">
              <span className="text-[14px] font-semibold tracking-widest text-[#E6F3F4] uppercase">
                {contact.title}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                {contact.sub}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="up"
            className="relative z-10 max-w-xl w-full pt-12"
          >
            <div
              className="text-base text-[#E6F3F4]/90 leading-relaxed font-medium"
              dangerouslySetInnerHTML={{
                __html: contact.content,
              }}
            />
          </ScrollReveal>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center">

          <ScrollReveal direction="right" delay={150}>
            <div className="max-w-xl w-full">

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#101820] mb-2">
                Schedule a Consultation
              </h3>

              <p className="text-[14px] text-[#43515A] mb-8">
                Fill in your details and our expert team will reach out to you
                shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[14px] font-medium text-[#101820] mb-1.5"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[14px] font-medium text-[#101820] mb-1.5"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-[14px] font-medium text-[#101820] mb-1.5"
                  >
                    Service Required
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  >  
                  <option  value=""> --select--- </option>
                  {service.map((item,idx) => (
                <option key={idx} value={item}> {item}</option>)) ?? []}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium text-[#101820] mb-1.5"
                  >
                    Brief Requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Tell us about your business requirement..."
                    className="w-full px-4 py-3 rounded-sm border border-[#D9E0E3] bg-white text-[#101820] focus:border-[#5FAAAD] focus:outline-none text-[14px] transition-colors"
                  />
                </div>

                {/* SUCCESS */}
                {success && (
                  <div className="rounded-sm bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                    {success}
                  </div>
                )}

                {/* ERROR */}
                {error && (
                  <div className="rounded-sm bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                {/* SUBMIT */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={loading}
                  className="w-full justify-center"
                  icon={
                    <svg
                      className="w-4 h-4 rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  }
                >
                  {loading ? "Submitting..." : "Submit Enquiry"}
                </Button>

              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
