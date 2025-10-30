# Analyzing Quicksort and Radixsort

<br>

<v-clicks>

Quicksort: $O(n \log n)$ operations

Radix sort: $O(\ell n)$ operations

</v-clicks>

<br>

<v-clicks>

Each operation has $O(\ell) = \Omega(\log n)$ communication.

</v-clicks>

<v-clicks>

- Comparisons in quicksort
- Permutation applications in radix sort

</v-clicks>

<br>

<div v-click="7">

Gold standard of oblivious sorting is $O(n \log^2 n)$ communication.

</div>

::: div{class="sort-table absolute right-10 top-30 w-2/5" v-click="6"}

| **Algorithm**    | **Communication**      |
|------------------|------------------------|
| Quicksort        | $O(\ell n \log n)$     |
| Radix Sort       | $O(\ell^2 n)$          |
| Sorting Networks | $O(n \log^3 n)$        |

:::


<style scoped>
/* Important: override prose reset */
:deep(.sort-table table) {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.9rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

:deep(.sort-table thead tr) {
  background: linear-gradient(180deg, #f8fafc, #eef2f7);
}

/* Borders restored */ 
:deep(.sort-table th),
:deep(.sort-table td) {
  text-align: left;
  padding: 8px 12px;
  border: 1px solid #e5e7eb !important;
}

/* Row striping */
:deep(.sort-table tbody tr:nth-child(odd)) {
  background: #fafafa;
}

/* Highlight top two rows */
:deep(.sort-table tbody tr:nth-child(-n+2)) {
  background: #dcfce7 !important;
}
</style>

<SlideCurrentNo class="absolute bottom-8 right-10"/>