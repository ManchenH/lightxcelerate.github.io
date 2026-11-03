// Job applications are collected by a Tally form (tally.so) shown as a pop-up.
// Set this to the ID at the end of the form's share link, e.g. https://tally.so/r/abc123 -> "abc123".
export const TALLY_FORM_ID = "RWxed9";

const EMBED_SCRIPT = "https://tally.so/widgets/embed.js";

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
    };
  }
}

let loading: Promise<void> | null = null;

function loadTally(): Promise<void> {
  if (window.Tally) return Promise.resolve();
  loading ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error("Could not load Tally"));
    };
    document.body.appendChild(script);
  });
  return loading;
}

// Opens the application form with the job title passed into the form's hidden "position" field.
// Falls back to opening the form in a new tab if the pop-up script can't load.
export async function openApplication(position: string) {
  try {
    await loadTally();
    window.Tally!.openPopup(TALLY_FORM_ID, {
      layout: "modal",
      width: 640,
      overlay: true,
      hiddenFields: { position },
    });
  } catch {
    window.open(`https://tally.so/r/${TALLY_FORM_ID}?position=${encodeURIComponent(position)}`, "_blank", "noopener");
  }
}
