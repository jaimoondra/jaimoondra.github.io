---
title: "Reusing Combinatorial Structure: Faster Iterative Projections over Submodular Base Polytopes"
collection: publications
permalink: /publication/reusing-combinatorial-structure-faster-iterative-projections-over-submodular-base-polytopes
excerpt: ''
date: 2021-12-06
venue: 'NeurIPS'
paperurl: 'https://proceedings.neurips.cc/paper/2021/file/d58f36f7679f85784d8b010ff248f898-Paper.pdf'
citation: 'Jai Moondra, Hassan Mortagy, Swati Gupta. (2021). &quot;Reusing Combinatorial Structure: Faster Iterative Projections over Submodular Base Polytopes.&quot; In proceedings of the 34th conference on Neural Information Processing Systems (<i>NeurIPS</i>).'
---
Abstract: Optimization algorithms such as projected Newton's method, FISTA, mirror descent and its variants enjoy near-optimal regret bounds and convergence rates, but suffer from a computational bottleneck of computing "projections'' in potentially each iteration (e.g., $O(T^{1/2})$ regret of online mirror descent). On the other hand, conditional gradient variants solve a linear optimization in each iteration, but result in suboptimal rates (e.g., $O(T^{3/4})$ regret of online Frank-Wolfe). Motivated by this trade-off in runtime v/s convergence rates, we consider iterative projections of close-by points over widely-prevalent submodular base polytopes $B(f)$. We develop a toolkit to speed up the computation of projections using both discrete and continuous perspectives. We subsequently adapt the away-step Frank-Wolfe algorithm to use this information and enable early termination. For the special case of cardinality based submodular polytopes, we improve the runtime of computing certain Bregman projections by a factor of $\Omega(n/\log(n))$. Our theoretical results show orders of magnitude reduction in runtime in preliminary computational experiments.

[arXiv](https://arxiv.org/abs/2106.11943) |
[Conference link](https://proceedings.neurips.cc/paper/2021/hash/d58f36f7679f85784d8b010ff248f898-Abstract.html)
