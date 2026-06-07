---
layout: single
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- Filter buttons -->
<style>
  #tag-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
  }

  /* Per-tag colors */
  .tag-btn[data-tag="all"]                   { --tag-color: #494e52; }
  .tag-btn[data-tag="machine learning"]      { --tag-color: #2e86ab; }
  .tag-btn[data-tag="discrete optimization"] { --tag-color: #e84855; }
  .tag-btn[data-tag="quantum computing"]     { --tag-color: #7b2d8b; }
  .tag-btn[data-tag="combinatorics"]         { --tag-color: #f18f01; }
  .tag-btn[data-tag="llms"]                  { --tag-color: #3bb273; }
  .tag-btn[data-tag="algorithmic fairness"]  { --tag-color: #c05299; }

  .tag-btn {
    padding: 6px 14px;
    border: 2px solid var(--tag-color, #494e52);
    border-radius: 20px;
    background: transparent;
    color: var(--tag-color, #494e52);
    cursor: pointer;
    font-size: 0.85em;
    transition: all 0.2s ease;
  }

  .tag-btn:hover,
  .tag-btn.active {
    background: var(--tag-color, #494e52);
    color: white;
  }

  .year-header {
    font-size: 1.2em;
    font-weight: bold;
    margin: 24px 0 8px;
    padding-bottom: 4px;
    border-bottom: 2px solid #e0e0e0;
    color: #494e52;
  }

  .year-header[style*="display: none"] + .publication-entry {
    /* ensures no orphaned entries show after a hidden header */
  }
</style>

<div id="tag-filters">
  <button class="tag-btn active" data-tag="all">All</button>
  <button class="tag-btn" data-tag="discrete optimization">Discrete Optimization</button>
  <button class="tag-btn" data-tag="machine learning">Machine Learning</button>
  <button class="tag-btn" data-tag="llms">LLMs</button>
  <button class="tag-btn" data-tag="algorithmic fairness">Algorithmic Fairness</button>
  <button class="tag-btn" data-tag="quantum computing">Quantum Computing</button>
  <button class="tag-btn" data-tag="combinatorics">Combinatorics</button>
</div>

<div id="publications-list">
  {% assign all_pubs = site.publications | sort: "date" | reverse %}
  {% assign current_year = "" %}
  {% for post in all_pubs %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year != current_year %}
      {% assign current_year = post_year %}
      <div class="year-header" data-year="{{ post_year }}">{{ post_year }}</div>
    {% endif %}
    <div class="publication-entry" data-tags="{{ post.tags | join: ',' | downcase }}" data-year="{{ post_year }}">
      {% include publication-single.html %}
    </div>
  {% endfor %}
</div>

<script>
  window.addEventListener('load', function () {
    const filtersEl = document.getElementById('tag-filters');
    const listEl    = document.getElementById('publications-list');

    // Count how many publications exist per tag
    function countForTag(tag) {
      if (tag === 'all') {
        return listEl.querySelectorAll('.publication-entry').length;
      }
      let count = 0;
      listEl.querySelectorAll('.publication-entry').forEach(pub => {
        const pubTags = pub.dataset.tags.split(',').map(t => t.trim());
        if (pubTags.includes(tag)) count++;
      });
      return count;
    }

    function applyFilter(tag) {
      const useYearHeaders = countForTag(tag) >= 2;

      // First pass: show/hide publication entries
      listEl.querySelectorAll('.publication-entry').forEach(pub => {
        const pubTags = pub.dataset.tags.split(',').map(t => t.trim());
        const visible = tag === 'all' || pubTags.includes(tag);
        pub.style.display = visible ? 'block' : 'none';
      });

      // Second pass: show/hide year headers based on whether they have
      // any visible publications beneath them, and whether we want headers at all
      listEl.querySelectorAll('.year-header').forEach(header => {
        if (!useYearHeaders) {
          header.style.display = 'none';
          return;
        }
        const year = header.dataset.year;
        // Check if any visible pub shares this year
        const hasVisible = Array.from(
          listEl.querySelectorAll(`.publication-entry[data-year="${year}"]`)
        ).some(pub => pub.style.display !== 'none');
        header.style.display = hasVisible ? 'block' : 'none';
      });
    }

    // Initialise: "All" is active, show year headers if ≥4 total
    applyFilter('all');

    filtersEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.tag-btn');
      if (!btn) return;

      const tag = btn.dataset.tag;
      document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      applyFilter(tag);
    });
  });
</script>