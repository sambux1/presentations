# Strengthening the Threat Model

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 50%; padding-right: 20px;">
    <br>
    <ul>
      <li v-click="1">AWS as a single point of failure</li>
      <li v-click="2">Reduce or eliminate trust in the core computation</li>
      <li v-click="3">Anonymous payments</li>
    </ul>
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>

<!--
The main area for future work is broadly to strengthen the threat model.

The use of CrypTen out-of-the-box meant that all computing parties had to be in AWS, which leaves AWS as a single point of failure.

More generally, we hope to reduce the level of trust in the core computation. To do so, two general directions are either to incorporate more external organizations in the MPC or to explore the possibility of using different cryptographic primitives.

Finally, our payment system gave us the ability to learn which users were in the sample and on which days. This can be avoided by incorporating anonymous payments.
-->