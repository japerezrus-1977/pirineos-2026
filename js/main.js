(function () {
  "use strict";

  var photos = window.PHOTOS || [];

  // ---- Lightbox ----
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCaption = document.getElementById("lbCaption");
  var lbDay = document.getElementById("lbDay");
  var lbClose = document.getElementById("lbClose");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var currentIndex = -1;

  function openLightbox(index) {
    currentIndex = index;
    var p = photos[index];
    if (!p) return;
    lbImg.src = p.src;
    lbImg.alt = p.caption;
    lbCaption.textContent = p.caption;
    lbDay.textContent = "Día " + p.day + " · " + p.date;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function step(delta) {
    if (currentIndex < 0) return;
    var next = (currentIndex + delta + photos.length) % photos.length;
    openLightbox(next);
  }

  document.querySelectorAll(".photo-card").forEach(function (card) {
    var gid = parseInt(card.getAttribute("data-gid"), 10) - 1;
    card.addEventListener("click", function () { openLightbox(gid); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(gid);
      }
    });
  });

  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", function () { step(-1); });
  lbNext.addEventListener("click", function () { step(1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // ---- Active day pill on scroll ----
  var sections = Array.prototype.slice.call(document.querySelectorAll(".day-section"));
  var pills = Array.prototype.slice.call(document.querySelectorAll(".day-pill"));

  function setActivePill(id) {
    pills.forEach(function (pill) {
      pill.classList.toggle("active", pill.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActivePill(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
