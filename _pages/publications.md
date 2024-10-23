---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<h2>Discrete Optimization</h2>

{% for post in site.publicationsDiscreteOptimization reversed %}
    {% include publication-single.html %}
{% endfor %}

<h2>Machine Learning</h2>

{% for post in site.publicationsMachineLearning reversed %}
    {% include publication-single.html %}
{% endfor %}

<h2>Quantum Computing</h2>

{% for post in site.publicationsQuantumComputing reversed %}
    {% include publication-single.html %}
{% endfor %}

<h2>Combinatorics</h2>

{% for post in site.publicationsCombinatorics reversed %}
    {% include publication-single.html %}
{% endfor %}

[//]: # ()
[//]: # ({% for post in site.publications reversed %})

[//]: # (  {% include archive-single.html %})

[//]: # ({% endfor %})
