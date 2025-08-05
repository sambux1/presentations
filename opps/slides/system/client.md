# Client Plugin

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <ul>
      <li v-click="1">Custom-built Chrome plugin to monitor browsing
        <ul>
          <li class="nested-gray" v-click="2">Tracks visits to top websites</li>
          <li class="nested-gray" v-click="3">Tracks referrals to top websites from social media sites</li>
        </ul>
      </li>
      <li v-click="4">Daily data uploads of secret-shared histograms</li>
      <li v-click="5">Client-side secret sharing and encryption</li>
      <li v-click="6">Implementation is open source</li>
    </ul>
    <!-- GitHub widget absolute positioned -->
    <div v-click="7" class="absolute bottom-10 left-20" style="display:flex; align-items:center; gap:1rem; background:#000; border-radius:12px; padding:0.75rem 1rem;">
      <div style="width:48px; height:48px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center;">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" style="width:44px; height:44px; border-radius:50%;" />
      </div>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https%3A%2F%2Fgithub.com%2Fsambux1%2Fopps-client" alt="QR Code to opps-client repo" style="width:140px; height:140px; border-radius:4px; background:#fff; padding:2px;" />
    </div>
  </div>
  <div style="flex: 1; text-align: right;">
      <img src="../../figures/system-design.png" alt="System Design Diagram" style="max-width: 90%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>