# Radix Sort

<div class="mx-auto w-fit" style="width: 60%">
  <img src="../../figures/radix-animated/radix-0.png" 
    v-show="$slidev.nav.clicks < 1">

  <img src="../../figures/radix-animated/radix-1.png"
    v-click v-show="$slidev.nav.clicks >= 1 && $slidev.nav.clicks <= 2">
  
  <img src="../../figures/radix-animated/radix-2.png"
    v-click v-show="$slidev.nav.clicks == 3">
  
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

<callout x="50" y="15" v-click="2">

  Single bit sorting is $O(n)$

</callout>

<SlideCurrentNo class="absolute bottom-8 right-10"/>