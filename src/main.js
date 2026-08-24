const header = document.querySelector("[data-header]");
const yearEl = document.querySelector("[data-year]");
const form = document.querySelector("[data-estimate-form]");
const success = document.querySelector("[data-form-success]");

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
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const value = link.getAttribute("data-service");
    if (!value || !form) return;
    const checkbox = form.querySelector(`input[name="service"][value="${CSS.escape(value)}"]`);
    if (checkbox instanceof HTMLInputElement) {
      checkbox.checked = true;
    }
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(form instanceof HTMLFormElement)) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const services = data.getAll("service");
  const payload = {
    name: data.get("name"),
    phone: data.get("phone"),
    email: data.get("email"),
    city: data.get("city"),
    services,
    message: data.get("message"),
    source: "dfw-windows-plus-landing",
    submittedAt: new Date().toISOString(),
  };

  try {
    localStorage.setItem("dfw_windows_plus_lead", JSON.stringify(payload));
  } catch {
    // Ignore storage failures in private browsing.
  }

  if (success) {
    success.hidden = false;
  }
  form.reset();
  success?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
