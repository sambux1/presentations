# More Data

<br>

<ul>
    <li v-click="1">Beyond domains</li>
    <li v-click="5">LLM in browser to generate embeddings</li>
</ul>

<div class="absolute bottom-15 right-18" style="width: 45%">
  <img src="../../../figures/browser/browser.png"
    v-show="$slidev.nav.clicks == 2">

  <img src="../../../figures/browser/browser-domain.png" 
    v-click v-show="$slidev.nav.clicks == 3">
  
  <img src="../../../figures/browser/browser-text.png" 
    v-click v-show="$slidev.nav.clicks >= 4">
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>