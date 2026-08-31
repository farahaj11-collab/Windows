const header = document.querySelector("[data-header]");
const yearEl = document.querySelector("[data-year]");
const residentialForm = document.querySelector('[data-form-type="residential"]');
const commercialForm = document.querySelector('[data-form-type="commercial"]');
const pathButtons = document.querySelectorAll("[data-path-btn]");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const onScroll = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

const setFormEnabled = (form, enabled) => {
  if (!(form instanceof HTMLFormElement)) return;
  form.hidden = !enabled;
  form.querySelectorAll("input, select, textarea, button").forEach((el) => {
    if (el instanceof HTMLElement) {
      if (enabled) {
        el.removeAttribute("disabled");
      } else {
        el.setAttribute("disabled", "");
      }
    }
  });
  const success = form.querySelector("[data-form-success]");
  if (success instanceof HTMLElement) {
    success.hidden = true;
  }
};

const setPath = (path) => {
  const isCommercial = path === "commercial";

  pathButtons.forEach((btn) => {
    const active = btn.getAttribute("data-path-btn") === path;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  setFormEnabled(residentialForm, !isCommercial);
  setFormEnabled(commercialForm, isCommercial);
};

pathButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const path = btn.getAttribute("data-path-btn");
    if (path) setPath(path);
  });
});

document.querySelectorAll("[data-path]").forEach((link) => {
  link.addEventListener("click", () => {
    const path = link.getAttribute("data-path");
    if (path) setPath(path);
  });
});

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    const value = link.getAttribute("data-interest");
    if (!value || !(residentialForm instanceof HTMLFormElement)) return;
    setPath("residential");
    const select = residentialForm.querySelector('select[name="projectType"]');
    if (select instanceof HTMLSelectElement) {
      const options = [...select.options].map((o) => o.value);
      if (options.includes(value)) {
        select.value = value;
      }
    }
  });
});

const wireForm = (form) => {
  if (!(form instanceof HTMLFormElement)) return;
  const success = form.querySelector("[data-form-success]");
  const type = form.getAttribute("data-form-type") || "lead";

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    payload.source = "istonefloors-landing";
    payload.formType = type;
    payload.submittedAt = new Date().toISOString();

    try {
      localStorage.setItem(`istonefloors_lead_${type}`, JSON.stringify(payload));
    } catch {
      // Ignore storage failures in private browsing.
    }

    if (success instanceof HTMLElement) {
      success.hidden = false;
    }
    form.reset();
    success?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
};

wireForm(residentialForm);
wireForm(commercialForm);

const hash = window.location.hash.replace("#", "");
if (hash === "commercial-form" || hash === "commercial") {
  setPath("commercial");
} else {
  setPath("residential");
}
