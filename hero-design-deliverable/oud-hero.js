/* OUD hero — progressive enhancement only. The hero is fully usable without it. */
(function () {
  "use strict";

  var top = document.querySelector(".oud-top");
  if (!top) return;

  // Mobile navigation disclosure.
  var toggle = top.querySelector(".oud-nav__toggle");
  var list = top.querySelector(".oud-nav__list");
  if (toggle && list) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      list.setAttribute("data-open", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    list.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Restrained parallax: the photograph drifts at most ~48px against the arch.
  var media = top.querySelector(".oud-hero__media");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!media) return;

  var ticking = false;
  var update = function () {
    ticking = false;
    if (reduce.matches) return;
    var rect = top.getBoundingClientRect();
    if (rect.bottom < 0) return;
    var drift = Math.min(window.scrollY, rect.height) * 0.08;
    media.style.setProperty("--oud-drift", Math.min(drift, 48).toFixed(1) + "px");
  };
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
})();
