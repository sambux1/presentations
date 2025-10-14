# The Problem

<div style="--crop-top: 30%; --crop-bottom: 5%; margin-top: -6rem;">
  <img class="crop-image" src="../../figures/cascading-animated/slide-1.png" 
    v-show="$slidev.nav.clicks < 1">

  <img class="crop-image" src="../../figures/cascading-animated/slide-2.png"
    v-click v-show="$slidev.nav.clicks == 1">
  
  <img class="crop-image" src="../../figures/cascading-animated/slide-3.png"
    v-click v-show="$slidev.nav.clicks == 2">
  
  <img class="crop-image" src="../../figures/cascading-animated/slide-4.png"
    v-click v-show="$slidev.nav.clicks == 3">
  
  <img class="crop-image" src="../../figures/cascading-animated/slide-5.png"
    v-click v-show="$slidev.nav.clicks == 4">
</div>

<style>

.crop-image {
  width: 100%;
  height: 100%;
  /* Use the same crop on every image by setting these per-slide variables */
  clip-path: inset(var(--crop-top, 0%) var(--crop-right, 0%) var(--crop-bottom, 0%) var(--crop-left, 0%));
}

</style>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
So, to sum up, the problem is the following. We have two input tables, where we don't know of any constraints on the keys of either table.

Joining them leaves us with a table of quadratic size. Then, if we try to join another table with the first result, then we get a table of cubic size.

This is a cascading effect, so for real world queries of interest which require a lot of joins, we're left with an output of size n to the k plus 1 for k joins.

This is obliviously not practical, and prior work has used this barrier to argue that we need leakage in order to evaluate complex queries.

We're going to take a different approach.
-->