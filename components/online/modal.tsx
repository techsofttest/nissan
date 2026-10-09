"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import Button from "@/components/ui/Button";

const GENDERS = ["Male", "Female", "Other"];

const JOB_MODES = ["Manufacturing", "Service", "Trading"];

const initialForm = {
  name: "",
  address: "",
  age: "",
  gender: "Male",
  educationalQualification: "",
  presentExperience: "",
  technicalQualification: "",
  familyBackground: "",
  landLine: "",
  mobile: "",
  email: "",
  presentActivity: "",
  natureOfActivity: "",
  proposedOrCommenced: "",
  constitution: "",
  partnersDetails: "",
  modeOfJob: "",
  products: "",
  rawMaterials: "",
  trainingRequired: "",
};

type ApplyModalProps = {
  open: boolean;
  onClose: () => void;
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-[13px] font-semibold text-[#102D33]">
        {label}
        {required && <span className="ml-1 text-[#C45C5C]">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-sm border border-[#D7E4E3] bg-white px-3.5 py-2.5 text-sm text-[#102D33] outline-none transition placeholder:text-[#8A9A9E] focus:border-[#5FAAAD] focus:ring-2 focus:ring-[#5FAAAD]/20";

export default function ApplyModal({ open, onClose }: ApplyModalProps) {
  const titleId = useId();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const update = (key: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Unable to submit your application. Please try again.");
      }

      setSuccess(data.message || "Your application has been submitted successfully.");
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close application form"
        className="absolute inset-0 bg-[#0A2226]/70 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E6EEED] bg-[#F3FBFB] px-5 py-4 sm:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#276F70]">
              Application
            </p>
            <h2 id={titleId} className="mt-1 text-xl font-semibold text-[#102D33] sm:text-2xl">
              Apply with Nissan Business Solutions
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#43515A] transition hover:bg-[#E1F0EF] hover:text-[#102D33]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-8 overflow-y-auto px-5 py-6 sm:px-8">
            {success && (
              <p role="status" className="rounded-sm border border-[#B7DCD4] bg-[#EFF9F5] px-4 py-3 text-sm text-[#1F684D]">
                {success}
              </p>
            )}
            {error && (
              <p role="alert" className="rounded-sm border border-[#E9C4C4] bg-[#FFF5F5] px-4 py-3 text-sm text-[#A33D3D]">
                {error}
              </p>
            )}

            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#276F70]">
                Personal details
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Name (in Block Letters)" required>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value.toUpperCase())}
                      className={`${inputClass} uppercase`}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field label="Complete postal address (with Pincode)" required>
                    <textarea
                      required
                      rows={3}
                      value={form.address}
                      onChange={(e) => update("address", e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>

                <Field label="Age" required>
                  <input
                    required
                    type="number"
                    min={1}
                    max={120}
                    value={form.age}
                    onChange={(e) => update("age", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Gender" required>
                  <select
                    required
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                    className={inputClass}
                  >
                    {GENDERS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Educational Qualification" required>
                  <input
                    required
                    value={form.educationalQualification}
                    onChange={(e) => update("educationalQualification", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Technical Qualification">
                  <input
                    value={form.technicalQualification}
                    onChange={(e) => update("technicalQualification", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Details of Present Experience" required>
                    <textarea
                      required
                      rows={3}
                      value={form.presentExperience}
                      onChange={(e) => update("presentExperience", e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field label="Family Background">
                    <textarea
                      rows={3}
                      value={form.familyBackground}
                      onChange={(e) => update("familyBackground", e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#276F70]">
                Contact
              </h3>

              <div className="grid gap-4 sm:grid-cols-3">
                <Field label="Land Line" required>
                  <input
                    required
                    type="tel"
                    value={form.landLine}
                    onChange={(e) => update("landLine", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Mobile" required>
                  <input
                    required
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => update("mobile", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#276F70]">
                Activity &amp; firm
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Present activity">
                  <input
                    value={form.presentActivity}
                    onChange={(e) => update("presentActivity", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Nature of activity" required>
                  <input
                    required
                    placeholder="Juice manufacturing, furniture, hospital services, etc."
                    value={form.natureOfActivity}
                    onChange={(e) => update("natureOfActivity", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Proposed / commenced" required>
                  <input
                    required
                    placeholder=""
                    value={form.proposedOrCommenced}
                    onChange={(e) => update("proposedOrCommenced", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Constitution of the firm" required>
                  <input
                    required
                    placeholder=""
                    value={form.constitution}
                    onChange={(e) => update("constitution", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Other partners / directors details" required>
                    <textarea
                      required
                      rows={3}
                      value={form.partnersDetails}
                      onChange={(e) => update("partnersDetails", e.target.value)}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>
                </div>

                <Field label="Mode of Job" required>
                  <select
                    required
                    value={form.modeOfJob}
                    onChange={(e) => update("modeOfJob", e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    {JOB_MODES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Product(s)" required>
                  <input
                    required
                    value={form.products}
                    onChange={(e) => update("products", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Raw materials" required>
                  <input
                    required
                    value={form.rawMaterials}
                    onChange={(e) => update("rawMaterials", e.target.value)}
                    className={inputClass}
                  />
                </Field>

                <Field label="Training required in the field of" required>
                  <input
                    required
                    value={form.trainingRequired}
                    onChange={(e) => update("trainingRequired", e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>
            </section>

            <p className="text-xs text-[#6B7B80]">
              <span className="text-[#C45C5C]">*</span> are mandatory fields
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-[#E6EEED] bg-white px-5 py-4 sm:flex-row sm:justify-end sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm px-5 py-2.5 text-sm font-semibold text-[#43515A] transition hover:bg-[#F3FBFB]"
            >
              Cancel
            </button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting…" : "Submit application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}