# Oblivious Joins

<div style="--crop-top: 20%; --crop-bottom: 5%; margin-top: -5rem;">
  <img class="crop-image" src="../../figures/join-animated/slide-1.png" 
    v-show="$slidev.nav.clicks < 1">

  <img class="crop-image" src="../../figures/join-animated/slide-2.png"
    v-click v-show="$slidev.nav.clicks == 1">
  
  <img class="crop-image" src="../../figures/join-animated/slide-3.png"
    v-click v-show="$slidev.nav.clicks == 2">
  
  <img class="crop-image" src="../../figures/join-animated/slide-4.png"
    v-click v-show="$slidev.nav.clicks >= 3">
</div>

<style>

.crop-image {
  width: 100%;
  height: 100%;
  /* Use the same crop on every image by setting these per-slide variables */
  clip-path: inset(var(--crop-top, 0%) var(--crop-right, 0%) var(--crop-bottom, 0%) var(--crop-left, 0%));
}

</style>

<callout x="50" y="87" v-click="4">

  $O(n^2)$ time and space

</callout>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The constraint of obliviousness is a lot more problematic for oblivious joins.

A join is a way of combining two tables according to their keys.

What we're interested in is the class of joins known as many-to-many joins, meaning that there can be duplicate keys in both input tables.

The problem is that if we don't know anything about the keys, then in the worst case, we have to materialize the cartesian product of the two tables, which requires quadratic time and space.
-->