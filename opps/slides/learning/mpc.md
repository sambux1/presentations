# Implementation in MPC

<ul>
  <li v-click="1">Initial label assignment can be performed in plaintext</li>
  <li v-click="2">Training a logistic regression model is implemented in CrypTen
    <ul>
      <li class="nested-gray" v-click="3">Logistic regression is supported out-of-the-box</li>
    </ul>
  </li>
  <li v-click="4">Computing thresholds requires oblivious sorting
    <ul>
      <li class="nested-gray" v-click="5">We implement Bitonic sort using CrypTen's secure primitives</li>
      <li class="nested-gray" v-click="6">The most expensive piece of the computation</li>
    </ul>
  </li>
  <li v-click="7">Updated label assignment and convergence checking use secure comparisons</li>
  <li v-click="8">Practically efficient
    <ul>
      <li class="nested-gray" v-click="9">All computation completed in a few hours at most</li>
    </ul>
  </li>
</ul>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>