"use client";

import { FormEvent, useEffect, useState } from "react";

const MAX_CV_SIZE = 2 * 1024 * 1024;
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

function fileExt(name: string) {
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i).toLowerCase() : "";
}

const fieldClass =
  "w-full rounded-xl border border-[#5FAAAD]/25 bg-[#F3FBFB] px-4 py-3 text-sm text-[#101820] transition placeholder:text-[#101820]/40 focus:border-[#5FAAAD] focus:outline-none focus:ring-2 focus:ring-[#5FAAAD]/40";

interface Job {
  id: number | string;
  title: string;
}

interface Data {
  apply: {
    title: string;
    subtitle: string;
    content: string;
    detail: {
      title: string;
      description: string;
    }[];
  } | undefined;
  job: Job[];
}

export default function ApplicationForm({ apply, job }: Data) {
  const [resumeInfo, setResumeInfo] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

  // Submission & Feedback States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverStatus, setServerStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});


useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const jobParam = params.get("job");

  if (!jobParam) return;

  const matchedJob = job.find(
    (item) =>
      String(item.id) === jobParam ||
      item.title.trim().toLowerCase() === jobParam.trim().toLowerCase()
  );

  if (matchedJob) {
    setSelectedJob(String(matchedJob.id));
  } else if (
    jobParam.trim().toLowerCase() ===
    "future opportunities / general application".toLowerCase() ||
    jobParam.trim().toLowerCase() === "general"
  ) {
    setSelectedJob("general");
  }
}, [job]);

async function onSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (resumeError) {
    setServerStatus({
      success: false,
      message: resumeError,
    });
    return;
  }

  const formData = new FormData(form);

  setIsSubmitting(true);
  setServerStatus(null);
  setFieldErrors({});

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${baseUrl}/application`, { // Update URL to match your Laravel POST route
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
       if (response.status === 422 && result.errors) {
    setFieldErrors(result.errors);
  }
  setServerStatus({
          success: false,
          message: result.message || 'Please check the submitted details.',
        });
        return;
      }

      setServerStatus({
        success: true,
        message: result.message || "Your application was submitted successfully.",
      });

      // Reset form and states on success
      form.reset();
      setResumeInfo("");
  setResumeError("");
  setSelectedJob("");
      } catch (err) {
      setServerStatus({
        success: false,
        message: 'Network error or server unavailable. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="apply" className="bg-[#0F2628] text-white" aria-labelledby="apply-h">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        
<div className="space-y-8 lg:col-span-2">
  {/* Application section heading */}
  {(apply?.title || apply?.subtitle || apply?.content) && (
    <div>
      {apply?.title && (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5FAAAD]">
          <span className="h-px w-8 bg-[#5FAAAD]" />
          {apply.title}
        </p>
      )}

      {apply?.subtitle && (
        <h2 id="apply-h" className="text-2xl font-bold md:text-3xl">
          {apply.subtitle}
        </h2>
      )}

      {apply?.content?.trim() && (
        <div
          className="mt-4 text-sm leading-relaxed text-white/70"
          dangerouslySetInnerHTML={{ __html: apply.content }}
        />
      )}
    </div>
  )}

  {/* First information box */}
  {apply?.detail?.[0] &&
    (apply.detail[0].title?.trim() ||
      apply.detail[0].description?.trim()) && (
      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
        {apply.detail[0].title?.trim() && (
          <h3 className="text-lg font-bold">
            {apply.detail[0].title}
          </h3>
        )}

        {apply.detail[0].description?.trim() && (
          <div
            className="text-sm leading-relaxed text-white/70 [&_i]:text-xs [&_i]:text-white/50"
            dangerouslySetInnerHTML={{
              __html: apply.detail[0].description,
            }}
          />
        )}
      </div>
    )}

  {/* Second information box */}
  {apply?.detail?.[1] &&
    (apply.detail[1].title?.trim() ||
      apply.detail[1].description?.trim()) && (
      <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-6">
        {apply.detail[1].title?.trim() && (
          <h4 className="text-sm font-bold">
            {apply.detail[1].title}
          </h4>
        )}

        {apply.detail[1].description?.trim() && (
          <div
            className="text-xs leading-relaxed text-white/60"
            dangerouslySetInnerHTML={{
              __html: apply.detail[1].description,
            }}
          />
        )}
      </div>
    )}
</div>


          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white p-6 text-[#101820] shadow-xl md:p-8">
              
              {/* Server Response Feedback Message */}
              {serverStatus && (
                <div
                  role={serverStatus.success ? "status" : "alert"}
                  className={`mb-6 rounded-xl border p-4 text-sm font-medium ${
                    serverStatus.success
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  <p className="mb-1 font-bold">
                    {serverStatus.success ? "Success" : "Error"}
                  </p>
                  {serverStatus.message}
                </div>
              )}

              <form method="POST" encType="multipart/form-data" noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full_name" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                      Full name <span className="text-[#5FAAAD]">*</span>
                    </label>
                    <input id="full_name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={fieldClass} />
                    {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                      Email address <span className="text-[#5FAAAD]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                    {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email[0]}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                      Phone number <span className="text-[#5FAAAD]">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required  autoComplete="tel" inputMode="tel" pattern="^\+?[0-9\s()-]{7,20}$"
                    maxLength={20} placeholder="+91 98765 43210" onChange={(e) => {let value = e.target.value;value = value.replace(/[^\d+\s()-]/g, "");
                    value = value.replace(/(?!^)\+/g, "");e.target.value = value;}}className={fieldClass}/>
                    {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="position" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                      Position applied for <span className="text-[#5FAAAD]">*</span>
                    </label>
                    
                      <select
                        id="position"
                        name="position"
                        required
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        className={fieldClass}
                      >
                        <option value="">Select a position</option>

                        {job.map((item) => (
                          <option key={item.id} value={String(item.title)}>
                            {item.title}
                          </option>
                        ))}

                        <option value="general">
                          Future Opportunities / General Application
                        </option>
                      </select>

                    {fieldErrors.position && <p className="mt-1 text-xs text-red-600">{fieldErrors.position[0]}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="qualifications" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                    Educational qualifications <span className="text-[#5FAAAD]">*</span>
                  </label>
                  <input
                    id="qualifications"
                    name="qualifications"
                    type="text"
                    required
                    placeholder="e.g. B.Com, MBA, LLB, CA Inter"
                    className={fieldClass}
                  />
                  {fieldErrors.qualifications && <p className="mt-1 text-xs text-red-600">{fieldErrors.qualifications[0]}</p>}
                </div>

                <div>
                  <label htmlFor="experience" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                    Relevant experience <span className="font-normal text-[#101820]/45">(required for experienced roles)</span>
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    placeholder="Describe your relevant experience. Write 'Fresher' if you have no prior work experience."
                    className={`${fieldClass} resize-none`}
                  />
                  {fieldErrors.experience && <p className="mt-1 text-xs text-red-600">{fieldErrors.experience[0]}</p>}
                </div>

                <div>
                  <label htmlFor="resume" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                    Resume / CV <span className="font-normal text-[#101820]/45">(PDF, DOC, DOCX — max 2 MB)</span>
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      setResumeInfo("");
                      setResumeError("");
                      if (!file) return;
                      const ext = fileExt(file.name);
                      if (!ALLOWED_EXT.includes(ext)) {
                        e.target.value = "";
                        setResumeError("Only PDF, DOC or DOCX files are accepted.");
                        return;
                      }
                      if (file.size > MAX_CV_SIZE) {
                        e.target.value = "";
                        setResumeError(`File size must not exceed 2 MB. Current size: ${formatSize(file.size)}`);
                        return;
                      }
                      setResumeInfo(`Selected: ${file.name} (${formatSize(file.size)})`);
                    }}
                    className="w-full cursor-pointer rounded-xl border border-[#5FAAAD]/25 bg-[#F3FBFB] px-4 py-3 text-xs text-[#101820]/70 file:mr-3 file:cursor-pointer file:rounded-xl file:border-0 file:bg-[#0F2628] file:px-5 file:py-2.5 file:text-xs file:font-semibold file:text-white hover:file:bg-[#17383b]"
                  />
                  {resumeError && <p className="mt-1 text-xs text-red-600">{resumeError}</p>}
                  {resumeInfo && <p className="mt-1 text-xs text-[#101820]/60">{resumeInfo}</p>}
                  {fieldErrors.resume && <p className="mt-1 text-xs text-red-600">{fieldErrors.resume[0]}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[#0F2628]">
                    Additional message <span className="font-normal text-[#101820]/45">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us why you're a good fit, or share any additional information."
                    className={`${fieldClass} resize-none`}
                  />
                  {fieldErrors.message && <p className="mt-1 text-xs text-red-600">{fieldErrors.message[0]}</p>}
                </div>

                <div className="rounded-xl border border-[#5FAAAD]/20 bg-[#F3FBFB] p-4">
                  <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-[#5FAAAD]/40 text-[#5FAAAD] focus:ring-[#5FAAAD]"
                    />
                    <span className="text-xs leading-relaxed text-[#101820]/75">
                      I consent to <strong>Nissan Business Solutions</strong> storing my
                      application details and uploaded CV securely for recruitment now or
                      for future roles. <span className="font-semibold text-[#5FAAAD]">*</span>
                    </span>
                  </label>
                  {fieldErrors.consent && <p className="mt-2 text-xs text-red-600">{fieldErrors.consent[0]}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#5FAAAD] px-6 py-3.5 text-sm font-semibold text-[#0F2628] transition hover:bg-[#4e979a] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting application...' : 'Submit application'}
                </button>

                <p className="text-center text-[11px] text-[#101820]/45">
                  Applications are sent to our recruitment team at{" "}
                  <strong className="text-[#0F2628]">nisjobs30@gmail.com</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}