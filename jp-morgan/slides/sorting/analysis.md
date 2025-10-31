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

<br>

<div v-click="5">

Gold standard of oblivious sorting is $O(n \log^2 n)$ communication.

</div>

::: div{class="sort-table absolute right-10 top-30 w-2/5" v-click="4"}

| **Algorithm**    | **Communication**      |
|------------------|------------------------|
| Quicksort        | $O(\ell n \log n)$     |
| Radix Sort       | $O(\ell^2 n)$          |
| Sorting Networks | $O(\ell n \log^2 n)$        |

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

<!--
Looking at the complexity of each protocol, quicksort performs n log n operations, where the operations are oblivious comparisons.

And radix sort performs ell times n operations, where I'm defining an operation as either a multiplication or the equivalent foundational operation in an oblivious shuffle.

I defined it this way because then each operation can be said to have Oh of ell communication. Since in the general case we need to sort a vector of unique elements, we know that ell is lower bounded by logn since we need to be able to represent n unique values.

Up on the right are the actual numbers for quicksort, radix sort, and bitonic sort, a popular sorting network. The numbers represent the number of bits communicated.

Once you account for the fact that each base operation has ell complexity, then we can see that the gold standard of oblivious sorting algorithms is n log squared n communication, which we can say is n log n "operations".
-->