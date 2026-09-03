(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".subnav a"));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute("href")); })
    .filter(Boolean);

  function onScroll() {
    var pos = window.scrollY + 140;
    var current = sections[0];
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) current = sec;
    });
    links.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

(function () {
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
    return;
  }

  revealEls.forEach(function (el, i) {
    el.style.setProperty("--reveal-delay", (i % 6) * 0.07 + "s");
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();

(function () {
  var arrows = Array.prototype.slice.call(document.querySelectorAll(".flow-arrow"));
  arrows.forEach(function (el, i) { el.style.setProperty("--arrow-i", i % 6); });
})();
