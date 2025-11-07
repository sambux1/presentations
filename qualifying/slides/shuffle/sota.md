# State of the Art

<br>

<v-clicks>

Peceny, Raghuraman, Rindal, and Shah (PKC 2025)

</v-clicks>

<v-clicks>

- Two constructions
- Both based on oblivious pseudorandom functions

</v-clicks>

<br>
<br>

:::: div{class="sort-table absolute right-10 top-30 w-2/5" v-click="4"}

| Construction 1 | Construction 2 |
| --- | --- |
| $O(n \ell)$ | $O(n \log \ell)$ |

::::

<div class="absolute bottom-6 left-1/2 transform -translate-x-1/2" style="display:flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 44%;" v-click="1">
  <img style="width: 100%; border:1px solid #000000" src="../../figures/permcorr-paper.png">
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>


<style scoped>
/* Important: override prose reset */
:deep(.sort-table) {
  background:rgba(230, 230, 230, 0.75);
  border-radius: 8px;
  overflow: hidden;
  /* Prevent anti-alias hairline at bottom radius */
  background-clip: padding-box;
}

:deep(.sort-table table) {
  width: 100%;
  background: transparent;
  border-radius: 0;
  border-spacing: 0;
  font-size: 0.9rem;
}

/* Row striping */
:deep(.sort-table tbody tr:nth-child(odd)) {
  background: #fafafa;
}

/* Highlight top two rows */
:deep(.sort-table tbody tr:nth-child(-n+2)) {
  background:rgb(200, 255, 220) !important;
}
</style>

<!--
Now I want to talk about what the state of the art constructions for permutation correlations look like. In particular, we'll be looking at two related constructions from a paper by Peceny, Raghuraman, Rindal, and Shah, from PKC 2025.

Both of their constructions fundamentally rely on oblivious pseudorandom functions. Each construction will make some number of calls to the OPRF for each element in the correlation, so both have linear complexity in n.

One of the constructions has linear communication in ell and is more practically efficient for most reasonable bitwidths.

The other construction has primarily been of theoretical interest so far, because it uses pseudorandom correlation generators to obtain sublinear communication in the bitwidth at the cost of significantly higher constant factors.
-->