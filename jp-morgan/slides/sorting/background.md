# Oblivious Sorting

<br>

<v-clicks>

Sorting control flow must be data-independent.

</v-clicks>

<br>

<v-clicks>

Sorting Networks

</v-clicks>

<v-clicks>

- Circuit with a fixed topology of compare-and-swap gates
- Requires $O(n \log^2 n)$ comparison gates

</v-clicks>
<br>
<v-clicks>

**Goal:** Match the $O(n \log n)$ plaintext algorithms.

</v-clicks>

<div class="absolute top-36 right-12" v-click="3">
  <img src="../../figures/bitonic-sort.png" class="w-1/3 ml-auto" />
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The core challenge of oblivious sorting is that we want to sort a vector while keeping the program's control flow oblivious, or data-independent.

The canonical approach to oblivious sorting and probably the most common approach is to use a sorting network, and this is the approach we used in our deployment earlier.

Sorting networks are circuits with a fixed topology of compare-and-swap gates.

Because they're circuits, they translate nicely to the MPC setting, and they parallelize well. But they require n log squared n comparison gates, which means we're leaving performance on the table with the extra log factor.

Instead, our goal is to match the plaintext algorithms that only have n log n complexity. And we want to do it in a way that is fast.
-->