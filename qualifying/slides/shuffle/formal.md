# Formally Defining the Problem

<br>

<v-clicks>

<img src="../../figures/perm-corr-functionality.png">

Three parameters we care about:

</v-clicks>

<v-clicks>

- $n$, the number of elements in a permutation correlation
- $\ell$, the bitwidth of each element of $A$, $B$, and $C$ in a single permutation correlation
- $p$, the total number of permutation correlations generated

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Now to be overly formal, we can define an ideal functionality that captures the generation of the preprocessed correlations.

The precise details here don't matter two much. The main point is that for a given length of the permutation n and a given bitwidth ell, the ideal functionality samples a random permutation pi and three random vectors subject to the correlation.

When it comes to performance, which we'll be thinking about closely in the coming slides, there are three parameters that we care about.

The first is the number of elements in the correlation, n.

The second is the bitwidth of each pseudorandom value in the correlation, ell.

And the final is the number of correlations we want to generate, which we'll call p. For many applications, we'll want to generate many permutation correlations, so generating in batches becomes important.
-->