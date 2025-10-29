# Client Plugin

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <br>
    <ul>
      <li v-click="1">Custom-built Chrome plugin to monitor browsing</li>
      <li v-click="2">Daily data uploads of secret-shared histograms</li>
      <li v-click="3">Client-side secret sharing and encryption</li>
    </ul>
  </div>
  <div style="flex: 1; text-align: right;">
      <img src="../../../figures/system-design.png" alt="System Design Diagram" style="max-width: 90%; height: auto;" />
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
Let's start with the client plugin.

We built a custom Chrome plugin from scratch which monitors both website visits and referrals.

Every day, the plugin puts together a histogram of the number of visits and referrals to each website.

Then it secret shares the histogram and sends the shares to the computing parties.

The shares are encrypted under the public key of the destination party.

All secret sharing and encryption takes place on the client side.

And finally, the plugin code is open source and can be found at the link at the bottom.
-->