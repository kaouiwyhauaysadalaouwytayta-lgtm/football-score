const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});

function hydrateDates() {
    const now = new Date();
    const currentDate = dateFormatter.format(now);

    document.querySelectorAll("[data-current-date]").forEach((node) => {
        node.textContent = currentDate;
        if (node.tagName === "TIME") {
            node.setAttribute("datetime", now.toISOString());
        }
    });

    document.querySelectorAll("[data-year]").forEach((node) => {
        node.textContent = String(now.getFullYear());
    });
}

function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}

function revealOnScroll() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll(".reveal").forEach((node) => {
            node.classList.add("revealed");
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -24px 0px"
    });

    document.querySelectorAll(".reveal").forEach((node) => {
        observer.observe(node);
    });
}

function markOutboundLinks() {
    document.querySelectorAll("a[data-outbound]").forEach((link) => {
        link.addEventListener("click", () => {
            link.dataset.clickedAt = new Date().toISOString();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    hydrateDates();
    enableSmoothScroll();
    revealOnScroll();
    markOutboundLinks();
});
