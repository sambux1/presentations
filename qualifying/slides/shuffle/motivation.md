# Example: Oblivious Sorting

<br>

<v-clicks>

Oblivious sorting networks require $O(n \log^2 n)$ comparison gates.

</v-clicks>

<v-clicks>

- We want to match the plaintext $O(n \log n)$ algorithms

</v-clicks>
<br>
<v-clicks>

The shuffle-then-sort paradigm.

</v-clicks>
<v-clicks>

- Obliviously shuffle, then use a data-dependent sorting algorithm
- The revealed permutation is uncorrelated with the input
- Achieves $O(n \log n)$ secure comparisons

</v-clicks>

<div class="absolute top-36 right-12" v-click="1">
  <img src="../../figures/bitonic-sort.png" alt="Permute-share function" class="w-1/3 ml-auto" />
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>