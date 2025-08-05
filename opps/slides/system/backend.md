# MPC Backend

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <ul>
      <li v-click="1">Threat model
        <ul>
          <li class="nested-gray" v-click="2">Three parties</li>
          <li class="nested-gray" v-click="3">Semi-honest security</li>
          <li class="nested-gray" v-click="4">One adversary</li>
        </ul>
      </li>
      <li v-click="5">We use and augment the CrypTen library</li>
      <li v-click="6">Code will be available in the future</li>
    </ul>
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