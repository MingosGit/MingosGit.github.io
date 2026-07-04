/* josecrub.com — interacciones compartidas */
(function () {
  "use strict";

  /* ---------- Menú móvil ---------- */
  const burger = document.querySelector(".nav-burger");
  const overlay = document.querySelector(".menu-overlay");

  if (burger && overlay) {
    burger.addEventListener("click", () => {
      const open = overlay.classList.toggle("open");
      burger.textContent = open ? "Cerrar" : "Menú";
      document.body.style.overflow = open ? "hidden" : "";
    });

    overlay.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        overlay.classList.remove("open");
        burger.textContent = "Menú";
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------- Animaciones de entrada ---------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Reloj de Barcelona ---------- */
  const clock = document.querySelector("[data-clock]");
  if (clock) {
    const fmt = new Intl.DateTimeFormat("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Europe/Madrid",
    });
    const tick = () => (clock.textContent = fmt.format(new Date()));
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Año en el footer ---------- */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Preview flotante en la lista de proyectos ---------- */
  const list = document.querySelector(".work-list");
  const preview = document.querySelector(".work-preview");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (list && preview && finePointer) {
    const imgs = new Map();
    preview.querySelectorAll("img").forEach((img) => imgs.set(img.dataset.key, img));

    let raf = null;
    let x = 0;
    let y = 0;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          const w = preview.offsetWidth;
          const h = preview.offsetHeight;
          const px = Math.min(Math.max(x + 28, 12), window.innerWidth - w - 12);
          const py = Math.min(Math.max(y - h / 2, 12), window.innerHeight - h - 12);
          preview.style.transform = "";
          preview.style.left = px + "px";
          preview.style.top = py + "px";
          raf = null;
        });
      }
    };

    list.querySelectorAll(".work-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const key = item.dataset.preview;
        imgs.forEach((img, k) => img.classList.toggle("show", k === key));
        if (imgs.has(key)) preview.classList.add("on");
      });
      item.addEventListener("mouseleave", () => preview.classList.remove("on"));
    });

    list.addEventListener("mousemove", move);
  }

  /* ---------- Lightbox ---------- */
  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lbImg = lightbox.querySelector("img");
    const close = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };

    document.querySelectorAll(".figure img").forEach((img) => {
      img.addEventListener("click", () => {
        lbImg.src = img.src;
        lbImg.alt = img.alt || "";
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    lightbox.addEventListener("click", close);
    const btn = lightbox.querySelector(".close");
    if (btn) btn.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
})();
