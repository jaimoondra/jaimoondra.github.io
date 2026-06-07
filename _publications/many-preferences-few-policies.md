---
title: "Many Preferences, Few Policies: Towards Scalable Language Model Personalization"
collection: publications
tags: ["Machine Learning", "LLMs", "Algorithmic Fairness"]
permalink: /publication/many-preferences-few-policies
excerpt: ''
date: 2026-04-10
venue: 'Under submission'
coauthors: 'Cheol Woo Kim, Roozbeh Nahavandi, Andrew Perrault, Milind Tambe, Swati Gupta'
paperurl: 'https://arxiv.org/abs/2604.04144'
citation: 'Cheol Woo Kim, Jai Moondra, Roozbeh Nahavandi, Andrew Perrault, Milind Tambe, Swati Gupta. (2026). &quot;Many Preferences, Few Policies: Towards Scalable Language Model Personalization.&quot; In <i>arXiv</i>.'
---
Abstract: The holy grail of LLM personalization is a single LLM for each user, perfectly aligned with that user's preferences. However, maintaining a separate LLM per user is impractical due to constraints on compute, memory, and system complexity. We address this challenge by developing a principled method for selecting a small portfolio of LLMs that captures representative behaviors across heterogeneous users. We model user preferences across multiple traits (e.g., safety, humor, brevity) through a multi-dimensional weight vector. Given reward functions across these dimensions, our algorithm PALM (Portfolio of Aligned LLMs) generates a small portfolio of LLMs such that, for any weight vector, the portfolio contains a near-optimal LLM for the corresponding scalarized objective. To the best of our knowledge, this is the first result that provides theoretical guarantees on both the size and approximation quality of LLM portfolios for personalization. It characterizes the trade-off between system cost and personalization, as well as the diversity of LLMs required to cover the landscape of user preferences. We provide empirical results that validate these guarantees and demonstrate greater output diversity over common baselines.

[arXiv](https://arxiv.org/abs/2604.04144)
