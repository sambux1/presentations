# Radix Sort

<div class="mx-auto w-fit" style="width: 60%">
  <img src="../../figures/radix-animated/radix-0.png" 
    v-show="$slidev.nav.clicks < 1">

  <img src="../../figures/radix-animated/radix-1.png"
    v-click v-show="$slidev.nav.clicks == 1">
  
  <img src="../../figures/radix-animated/radix-2.png"
    v-click v-show="$slidev.nav.clicks >= 2 && $slidev.nav.clicks <= 3">
  
  <img src="../../figures/radix-animated/radix-3.png"
    v-click v-show="$slidev.nav.clicks == 4">
  
  <img src="../../figures/radix-animated/radix-4.png"
    v-click v-show="$slidev.nav.clicks == 5">
  
  <img src="../../figures/radix-animated/radix-5.png"
    v-click v-show="$slidev.nav.clicks == 6">
  
  <img src="../../figures/radix-animated/radix-6.png"
    v-click v-show="$slidev.nav.clicks == 7">

  <img src="../../figures/radix-animated/radix-7.png"
    v-click v-show="$slidev.nav.clicks == 8">

  <img src="../../figures/radix-animated/radix-8.png"
    v-click v-show="$slidev.nav.clicks == 9">

  <img src="../../figures/radix-animated/radix-9.png"
    v-click="10" v-show="$slidev.nav.clicks >= 10">
</div>

<callout x="50" y="15" v-click="3">

  Single bit sorting is $O(n)$

</callout>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Now let's look at radix sort. Radix sort is quite different. As in plaintext radix sort, we're going to sort one bit at a time.

In this diagram we have 8 inputs, each 4 bits long. We're going to sort on the least significant bit first, then the next one, and so on until the most significant bit.

To begin, we sort on the least significant bit, and as output we get a permutation sigma4. Then we want to apply sigma4 to all of the bits. After applying sigma4, the 4th bit is sorted, with 0s at the beginning and 1s at the end.

Sorting a single bit has linear cost. It ultimately reduces to basically a round of multiplications. I'm happy to go into more detail on this if anybody is interested.

Next, we do this same thing on the 3rd bit, so we sort on the 3rd bit, get a permutation sigma3, and apply sigma3 to the list, and now the third bit is sorted. We needed to sort sigma4 first so the sorted 4th bit acts as the tiebreak condition for the 3rd bit.

Then the same thing for the second bit, and again for the first.

In the end, we've applied a bunch of permutations, sigma4 then sigma3 then sigma2 then sigma1, so the total permutation that's been applied is their composition.
-->