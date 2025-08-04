# Strengthening the Threat Model

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 50%; padding-right: 20px;">
    <ul>
      <li v-click="1">AWS as a single point of failure</li>
      <li v-click="2">Reduce or eliminate trust in the core computation
        <ul>
          <li class="nested-gray" v-click="3">Incorporate external organizations in the MPC</li>
          <li class="nested-gray" v-click="4">Explore different cryptographic primitives</li>
        </ul>
      </li>
      <li v-click="5">Anonymous payments</li>
    </ul>
  </div>
  <div style="flex: 1; text-align: right;" v-click="6">
    <!-- TODO: replace with actual diagram once ready -->
    <img src="../../figures/system-design.png" alt="Threat Model Diagram" style="max-width: 50%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>