# Analysis of the Primary Construction

<img src="../../figures/perm-corr.png" style="width: 35%; float: right">

<br>

<v-clicks>

- $n$ calls to the OPRF
- $O(n \ell)$ total communication
- Most efficient construction to date in practice
- $\approx 4$s per million elements

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The analysis of this construction is pretty straightforward.

We make exactly n calls to the OPRF, assuming that our correlation length is less than the PRF output length.

And each call to the OPRF has Oh of ell communication, so the total communication is Oh of n times ell.

In terms of concrete performance, this construction is the state of the art.

I've implemented this protocol and optimized it quite a bit, so my implementation is the state of the art. To give you a rough sense on the numbers, when generating many correlations with many threads, the amortized cost per million elements of a correlation is roughly 4 seconds.
-->