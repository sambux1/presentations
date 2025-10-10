# Iterative Quicksort

<div style="--crop-top: 25%; --crop-bottom: 5%; margin-top: -5rem;">
  <img class="crop-image" src="../../figures/quicksort-animated/slide-1.png" 
    v-show="$slidev.nav.clicks < 1">

  <img class="crop-image" src="../../figures/quicksort-animated/slide-2.png"
    v-click v-show="$slidev.nav.clicks == 1">
  
  <img class="crop-image" src="../../figures/quicksort-animated/slide-3.png"
    v-click v-show="$slidev.nav.clicks == 2">
  
  <img class="crop-image" src="../../figures/quicksort-animated/slide-4.png"
    v-click v-show="$slidev.nav.clicks == 3">
  
  <img class="crop-image" src="../../figures/quicksort-animated/slide-5.png"
    v-click v-show="$slidev.nav.clicks == 4">
  
  <img class="crop-image" src="../../figures/quicksort-animated/slide-6.png"
    v-click v-show="$slidev.nav.clicks == 5">
  
  <img class="crop-image" src="../../figures/quicksort-animated/slide-7.png"
    v-click v-show="$slidev.nav.clicks == 6">
</div>

<style>

.crop-image {
  width: 100%;
  height: 100%;
  /* Use the same crop on every image by setting these per-slide variables */
  clip-path: inset(var(--crop-top, 0%) var(--crop-right, 0%) var(--crop-bottom, 0%) var(--crop-left, 0%));
}

</style>

