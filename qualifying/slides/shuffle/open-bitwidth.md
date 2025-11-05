# Sublinearity in $\ell$

<br>

<v-clicks>

Protocols exist for generating permutation correlations with sublinear communication in $\ell$.

</v-clicks>
<v-clicks>

- No implementation of the Peceny et al. construction (until now!)
- Improve parameters to get practical efficiency

</v-clicks>

<br>

<v-clicks>

Ongoing work: graph algorithms

</v-clicks>
<v-clicks>

- Requires thousands of bits of permutation correlations
- Existing constructions can be practical

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The first and probably most tangible future direction is to improve the existing constructions with sublinearity in the bitwidth and build them out in practice.

As I mentioned, the Peceny et al. paper didn't include an implementation of the sublinear construction, so I did that myself. There's a lot of work to do to improve parameters and explore different tradeoffs to get the best practical efficiency.

I also intend to actually apply this to graph algorithms. Again, oblivious graph algorithms require thousands of bits of permutation correlations for the same underlying permutation, so the existing sublinear constructions can be quite practical here.
-->