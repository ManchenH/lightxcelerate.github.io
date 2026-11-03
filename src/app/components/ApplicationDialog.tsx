import { useState, type FormEvent } from "react";
import { Upload } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

// Applications are delivered by FormSubmit (formsubmit.co) as emails with the resume attached.
const APPLICATIONS_EMAIL = "haochi@lightxcelerate.com";
const MAX_RESUME_MB = 5;

const inputClass =
  "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-colors";
const labelClass = "block text-sm font-medium text-slate-300 mb-1.5";

export function ApplicationDialog({
  position,
  onOpenChange,
}: {
  position: string | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const resume = (e.currentTarget.elements.namedItem("resume") as HTMLInputElement).files?.[0];
    if (resume && resume.size > MAX_RESUME_MB * 1024 * 1024) {
      e.preventDefault();
      setError(`Resume must be smaller than ${MAX_RESUME_MB} MB.`);
    }
  }

  return (
    <Dialog
      open={position !== null}
      onOpenChange={(open) => {
        if (!open) {
          setFileName("");
          setError("");
        }
        onOpenChange(open);
      }}
    >
      <DialogContent className="bg-[#0b0f17] border-white/10 text-white sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium text-white">Apply: {position}</DialogTitle>
          <DialogDescription className="text-slate-400">
            Tell us about yourself and attach your resume. We'll get back to you by email.
          </DialogDescription>
        </DialogHeader>

        <form
          action={`https://formsubmit.co/${APPLICATIONS_EMAIL}`}
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={`New application: ${position}`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={`${window.location.origin}/?applied=1#careers`} />
          <input type="hidden" name="Position" value={position ?? ""} />
          {/* Honeypot field to filter spam bots */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="apply-name" className={labelClass}>Full name *</label>
            <input id="apply-name" name="Name" required className={inputClass} placeholder="Jane Chen" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="apply-email" className={labelClass}>Email *</label>
              <input id="apply-email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="apply-phone" className={labelClass}>Phone</label>
              <input id="apply-phone" name="Phone" type="tel" className={inputClass} placeholder="+886 912 345 678" />
            </div>
          </div>
          <div>
            <label htmlFor="apply-linkedin" className={labelClass}>LinkedIn profile</label>
            <input id="apply-linkedin" name="LinkedIn" type="url" className={inputClass} placeholder="https://www.linkedin.com/in/..." />
          </div>
          <div>
            <span className={labelClass}>Resume * (PDF or Word, max {MAX_RESUME_MB} MB)</span>
            <label
              htmlFor="apply-resume"
              className="flex items-center gap-3 w-full rounded-lg border border-dashed border-white/20 bg-white/[0.03] px-4 py-4 text-sm cursor-pointer hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors"
            >
              <Upload size={18} className="text-cyan-400 shrink-0" />
              <span className={fileName ? "text-white truncate" : "text-slate-400"}>
                {fileName || "Choose a file to upload"}
              </span>
            </label>
            <input
              id="apply-resume"
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="sr-only"
              onChange={(e) => {
                setFileName(e.target.files?.[0]?.name ?? "");
                setError("");
              }}
            />
          </div>
          <div>
            <label htmlFor="apply-message" className={labelClass}>Why are you interested?</label>
            <textarea id="apply-message" name="Message" rows={4} className={`${inputClass} resize-y`} placeholder="A few sentences about your background and interest in the role." />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors"
          >
            Submit application
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
