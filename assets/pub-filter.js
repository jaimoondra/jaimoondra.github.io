// Clickable topic tags on the Publications page.
//
// How it works:
//  - Quarto wraps every "### Paper title" heading and what follows it in a
//    <section class="level3">, so each section is one paper.
//  - Tags are written in publications.qmd as [Tag name]{.pub-tag}, which
//    renders as <span class="pub-tag">Tag name</span>. Papers are matched to
//    the filter by the tag's text, so the spelling in the "Topics:" bar and on
//    each paper must be identical.
//  - Clicking a tag shows only the papers carrying that tag and records the
//    choice in the URL as ?topic=Tag%20name, so filtered views can be
//    bookmarked, shared, and undone with the browser's Back button.
//    Clicking "All", or the tag that is already active, shows everything again.
(function () {
  "use strict";

  var PARAM = "topic";
  var ALL = "__all__";

  var bar = document.getElementById("pub-filter");
  var papers = Array.prototype.filter.call(
    document.querySelectorAll("main section.level3"),
    function (s) { return s.querySelector(".pub-tag"); }
  );
  if (!bar || papers.length === 0) return;

  function text(el) { return el.textContent.replace(/\s+/g, " ").trim(); }
  function urlFor(topic) {
    return location.pathname + (topic ? "?" + PARAM + "=" + encodeURIComponent(topic) : "");
  }
  function topicFromURL() {
    return new URLSearchParams(location.search).get(PARAM);
  }

  // Which tags each paper carries, and how many papers carry each tag.
  var counts = {};
  papers.forEach(function (p) {
    var seen = {};
    Array.prototype.forEach.call(p.querySelectorAll(".pub-tag"), function (el) {
      var t = text(el);
      if (!seen[t]) { seen[t] = true; counts[t] = (counts[t] || 0) + 1; }
    });
  });

  // Turn every tag span (in the filter bar and on each paper) into a real link,
  // so it is keyboard-focusable and can be opened in a new tab.
  var links = [];
  Array.prototype.forEach.call(document.querySelectorAll(".pub-tag"), function (el) {
    var isAll = el.classList.contains("pub-tag-all");
    var topic = isAll ? ALL : text(el);
    var a = document.createElement("a");
    a.className = el.className;
    a.setAttribute("data-topic", topic);
    a.href = urlFor(isAll ? null : topic);
    a.textContent = text(el);
    if (bar.contains(el)) {
      var count = document.createElement("span");
      count.className = "pub-tag-count";
      count.textContent = isAll ? papers.length : (counts[topic] || 0);
      a.appendChild(count);
    }
    a.addEventListener("click", onClick);
    el.parentNode.replaceChild(a, el);
    links.push(a);
  });

  // "Showing N of M papers tagged X. Show all" line under the filter bar.
  var status = document.createElement("p");
  status.id = "pub-filter-status";
  status.setAttribute("aria-live", "polite");
  status.hidden = true;
  bar.appendChild(status);

  function apply(topic) {
    var active = (topic && counts[topic]) ? topic : null;   // ignore unknown topics
    var shown = 0;
    papers.forEach(function (p) {
      var match = !active || Array.prototype.some.call(
        p.querySelectorAll(".pub-tag"),
        function (t) { return t.getAttribute("data-topic") === active; }
      );
      p.hidden = !match;
      if (match) shown++;
    });
    links.forEach(function (a) {
      var t = a.getAttribute("data-topic");
      var on = active ? (t === active) : (t === ALL);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
    status.textContent = "";
    if (active) {
      status.appendChild(document.createTextNode(
        "Showing " + shown + " of " + papers.length + " papers tagged “" + active + "”. "
      ));
      var clear = document.createElement("a");
      clear.href = urlFor(null);
      clear.textContent = "Show all";
      clear.setAttribute("data-topic", ALL);
      clear.addEventListener("click", onClick);
      status.appendChild(clear);
    }
    status.hidden = !active;
  }

  function onClick(e) {
    // Let modifier-clicks / middle-clicks open the link in a new tab as usual.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    var a = e.currentTarget;
    var topic = a.getAttribute("data-topic");
    if (topic === ALL || topic === topicFromURL()) topic = null;  // toggle off
    var url = urlFor(topic);
    if (url !== location.pathname + location.search) history.pushState(null, "", url);
    apply(topic);
    // A tag clicked on a paper lower down the page: bring the filter bar into
    // view so the (now shorter) list is seen from the top.
    if (!bar.contains(a)) bar.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  window.addEventListener("popstate", function () { apply(topicFromURL()); });
  apply(topicFromURL());
})();
