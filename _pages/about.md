---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-K4DFEX7JZJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K4DFEX7JZJ');
</script>

I am a Postdoctoral Fellow at Tepper School of Business, Carnegie Mellon University. I work with [R. Ravi](https://www.contrib.andrew.cmu.edu/~ravi/). My research lies at the intersection of algorithms, discrete optimization, and machine learning. I am also interested in quantum computing.

I received my PhD in Algorithms, Combinatorics, and Optimization (ACO) at School of Computer Science, Georgia Tech. I was very fortunate to be advised by [Swati Gupta](https://swatigupta.tech/) and [Mohit Singh](https://www2.isye.gatech.edu/~msingh94/). You can find my thesis [here](https://jaimoondra.github.io/files/thesis.pdf).

My research interests include discrete optimization and its applications to algorithmic fairness, machine learning, and quantum computing.
Each of my research projects (alongside my fantastic and generous collaborators) tries to answers one or more of the following questions:
- *How do we reconcile multiple competing objectives in optimization problems?* This question arises in various contexts, such as
  - Online learning, where we seek to balance `rewards` (e.g., regret minimization) against `cost` or computational efficiency [\[NeurIPS21\]](https://jaimoondra.github.io/publication/reusing-combinatorial-structure-faster-iterative-projections-over-submodular-base-polytopes).
  - Machine learning and resource allocation, where different people or groups have different, often competing definitions of fairness [\[EC23\]](https://jaimoondra.github.io/publication/socially-fair-and-hierarchical-facility-location-problems), [\[ICML25\]](https://jaimoondra.github.io/publication/navigating-the-social-welfare-frontier), [\[web-tool\]](https://usa-medical-deserts.streamlit.app/). While algorithm design often focuses on optimizing for a single predetermined objective, it if more usefult to balance multiple complex goals in practice.
  - Combinatorial optimization, where studying multiple objectives provides a unified framework and new insights into classical problems [\[SODA25\]](https://jaimoondra.github.io/publication/existence-and-approximations-for-fair-solution-portfolios) [\[arXiv22\]](https://jaimoondra.github.io/publication/multi-purpose-routing-new-perspectives-and-algorithms).
- *Can we combine techniques from continuous and discrete optimization to obtain more better algorithms?* For example, our paper [\[NeurIPS21\]](https://jaimoondra.github.io/publication/reusing-combinatorial-structure-faster-iterative-projections-over-submodular-base-polytopes) models recommendation systems as online optimization problem over submodular base polytope. We use several discrete optimization techniques to improve runtime of regret-optimal mirror descent methods on these polytopes.
- *Can we use techniques from classical computing to improve the performance of quantum algorithms?* For example, our paper [\[Quantum23\]](https://jaimoondra.github.io/publication/warm-started-qaoa) on QAOA for Max-Cut discusses warm-starting QAOA with solutions from the classical Goemans-Williamson algorithm. Our papers [\[PRA22\]](https://jaimoondra.github.io/publication/generating-target-graph-couplings-for-qaoa-from-native-quantum-hardware-couplings) [\[arXiv24\]](https://jaimoondra.github.io/publication/sparsification-and-decomposition-qaoa) on generating graph compilations for QAOA use classical pre-processing to shorten QAOA circuit and reduce noise in it.

Outside of work, I enjoy hiking, poetry, and cooking. I am also a big cricket fan!

## Research updates

#### January 2026

I am starting as a Postdoctoral Fellow at Tepper School of Business, Carnegie Mellon University!

#### November 2025

I defended my PhD thesis titled "New Directions in Multi-Objective Optimization with Applications"! Find the thesis [here](https://jaimoondra.github.io/files/thesis.pdf). Extremely grateful to my thesis committee members: Swati Gupta (co-advisor), Mohit Singh (co-advisor), Santosh Vempala, Milind Tambe, and Sahil Singla.

#### May 2025

Our paper on navigating the social welfare frontier with portfolios for multi-objective reinforcement learning has been accepted at ICML 2025! Joint work with Cheol Woo Kim, Shresth Verma, Madeleine Pollack, Lingkai Kong, Milind Tambe, and Swati Gupta. Find the paper [here](https://arxiv.org/abs/2502.09724).

#### May 2025

I will be attending the 2025 International Conference on Continuous Optimization (ICCOPT) and the International Conference on Machine Learning (ICML) this July. If you're attending either and would like to chat about research, feel free to reach out!

#### December 2024

Our paper on using graph sparsification and decomposition for noise reduction in QAOA is now under revision at Quantum. Joint work with Philip C. Lotshaw, Greg Mohler, and Swati Gupta.

#### October 2024

Our paper on portfolios for fairness in combinatorial optimization has been accepted at SODA 2025! Joint work with Swati Gupta and Mohit Singh. Find the paper [here](https://arxiv.org/abs/2311.03230).

#### September 2024

I am visiting Dr. Swati Gupta's lab at MIT Sloan School of Management this Fall!

#### June 2024

Our paper on using graph sparsification and decomposition for noise reduction in QAOA is now online [here](https://arxiv.org/abs/2406.14330). Joint work with Philip C. Lotshaw, Greg Mohler, and Swati Gupta.

#### May 2024

Our [web tool](https://usa-medical-deserts.streamlit.app/) to visualize and mitigate 'medical deserts' the US is now online. Based on our [paper](https://arxiv.org/abs/2211.14873) on fair facility location from EC 2023. Joint work with Swati Gupta and Mohit Singh.

#### May 2024

I am interning at Amazon Research in Bellevue, Washington this summer with the Supply Chains Optimization Technology team.

#### September 2023

Our paper <i>Warm-Started QAOA with Custom Mixers Provably Converges and Computationally Beats Goemans-Williamson's Max-Cut at Low Circuit Depths</i> has been published in Quantum! Find the paper [here](https://arxiv.org/abs/2112.11354). Joint work with Reuben Tate, Bryan Gard, Greg Mohler, and Swati Gupta. Find the paper [here](https://arxiv.org/abs/2406.14330).

#### July 2023

Our paper <i>Which $L_p$ norm is the fairest? Approximations for fair facility location across all 'p'</i> has been published in Economics and Computation (EC) 2023! Find the paper [here](https://arxiv.org/abs/2211.14873). Joint work with Swati Gupta and Mohit Singh.

#### July 2022

Our paper <i>Generating Target Graph Couplings for QAOA from Native Quantum Hardware Couplings</i> has been accepted for publication in Physical Review A! Find the paper [here](https://jaimoondra.github.io/publication/generating-target-graph-couplings-for-qaoa-from-native-quantum-hardware-couplings). Joint work with Joel Rajakumar, Bryan Gard, Creston Herold, and Swati Gupta.

#### May 2022

Our poster on <i>Reusing Combinatorial Structure: Faster Iterative Projections over Submodular Base Polytopes</i> is runner-up at MIP 2022 poster competition! Find the paper from NeurIPS 2021 [here](https://arxiv.org/abs/2106.11943). Joint work with Hassan Mortagy and Swati Gupta.

#### February 2022

Our paper <i>New Proofs for the Disjunctive Rado Number of the Equations $x_1 - x_2 = a$ and $x_1 - x_2 = b$</i> has been published in Graphs and Combinatorics! Find the paper [here](https://jaimoondra.github.io/publication/new-proofs-for-the-disjunctive-rado-number-of-the-2-equations). Joint work with A. Dileep and Amitabha Tripathi.

#### December 2021

Our paper <i>Reusing Combinatorial Structure: Faster Iterative Projections over Submodular Base Polytopes</i> has been published in NeurIPS 2021! Find the paper [here](https://arxiv.org/abs/2106.11943). Joint work with Hassan Mortagy and Swati Gupta.
