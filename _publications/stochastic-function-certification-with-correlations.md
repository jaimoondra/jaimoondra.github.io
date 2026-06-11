---
title: "Stochastic Function Certification with Correlations"
collection: publications
tags: ["Discrete Optimization"]
permalink: /publication/stochastic-function-certification-with-correlations
excerpt: ''
date: 2026-04-03
venue: 'Under submission'
coauthors: 'Rohan Ghuge and Mohit Singh'
paperurl: 'https://arxiv.org/abs/2604.02611'
citation: 'Rohan Ghuge, Jai Moondra, Mohit Singh. (April 2026). 
&quot;
Stochastic Function Certification with Correlations.&quot; <i>arXiv preprint arXiv:2604.02611</i>'
---
We study the Stochastic Boolean Function Certification (SBFC) problem, where we are given n Bernoulli random variables $\lbrace X_e : e \in U \rbrace$ on a ground set $U$ of $n$ elements with joint distribution $p$, a Boolean function $f$ on the power set of $U$, and an (unknown) scenario $S = \lbrace e \in U: X_e = 1 \rbrace$ of active elements sampled from $p$. We seek to probe the elements one-at-a-time to reveal if they are active until we can certify $f(S)=1$, while minimizing the expected number of probes. Unlike most previous results that assume independence, we study correlated distributions $p$ and give approximation algorithms for several classes of functions $f$.
When $f(S)$ is the indicator function for whether $S$ is the spanning set of a given matroid, our problem reduces to finding a basis of active elements of a matroid by probing elements. We give a non-adaptive $O( \log n)$-approximation algorithm for arbitrary distributions $p$, and show that this is tight up to constants unless P = NP, even for partition matroids. For uniform matroids, we give constant factor 4.642-approximation ([BBFT20]) that can be further improved to a 2-approximation if additionally the random variables are negatively correlated for the case of 1-uniform matroid.
We also give an adaptive $O(\log k)$-approximation algorithm for SBFC for $k$-uniform matroids for the Graph Probing problem, where we seek to probe the edges of a graph one-at-a-time until we find $k$ active edges. The underlying distribution on edges arises from (hidden) independent vertex random variables, with an edge being active if at least one of its endpoints is active. This significantly improves over the information-theoretic lower bound on $Ω( \text{poly}(n))$ ([JGM19]) for adaptive algorithms for k-uniform matroids with arbitrary distributions.
[arXiv](https://arxiv.org/abs/2604.02611)
