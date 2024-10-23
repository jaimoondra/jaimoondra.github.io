---
title: "Warm-Started QAOA with Custom Mixers Provably Converges and Computationally Beats Goemans-Williamson's Max-Cut at Low Circuit Depths"
collection: publications
permalink: /publication/warm-started-qaoa
excerpt: ''
date: 2023-09-29
venue: 'Quantum'
coauthors: 'Reuben Tate, Bryan Gard, Greg Mohler, and Swati Gupta'
paperurl: 'https://arxiv.org/abs/2112.11354'
citation: 'Reuben Tate, Jai Moondra, Bryan Gard, Greg Mohler, Swati Gupta. (September 2023). 
&quot;Warm-Started QAOA with Custom Mixers Provably Converges and Computationally Beats Goemans-Williamson’s Max-Cut at Low Circuit Depths&quot;'
---
Abstract: We generalize the Quantum Approximate Optimization Algorithm (QAOA) of Farhi et al. (2014) to allow for arbitrary separable initial states with corresponding mixers such that the starting state is the most excited state of the mixing Hamiltonian. We demonstrate this version of QAOA, which we call QAOA-warmest, by simulating Max-Cut on weighted graphs. We initialize the starting state as a warm-start using 2 and 3-dimensional approximations obtained using randomized projections of solutions to Max-Cut's semi-definite program, and define a warm-start dependent custom mixer. We show that these warm-starts initialize the QAOA circuit with constant-factor approximations of 0.658 for 2-dimensional and 0.585 for 3-dimensional warm-starts for graphs with non-negative edge weights, improving upon previously known trivial (i.e., 0.5 for standard initialization) worst-case bounds at p = 0. These factors in fact lower bound the approximation achieved for Max-Cut at higher circuit depths, since we also show that QAOA-warmest with any separable initial state converges to Max-Cut under the adiabatic limit as p → ∞. However, the choice of warm-starts significantly impacts the rate of convergence to Max-Cut, and we show empirically that our warm-starts achieve a faster convergence compared to existing approaches. Additionally, our numerical simulations show higher quality cuts compared to standard QAOA, the classical Goemans-Williamson algorithm, and a warm-started QAOA without custom mixers for an instance library of 1148 graphs (upto 11 nodes) and depth p=8. We further show that QAOA-warmest outperforms the standard QAOA of Farhi et al. in experiments on current IBM-Q and Quantinuum hardware.

[arXiv](https://arxiv.org/abs/2112.11354)
[Quantum](https://quantum-journal.org/papers/q-2023-09-26-1121/)