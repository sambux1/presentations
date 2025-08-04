# Background

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 50%; padding-right: 20px;">
    <ul>
      <li v-click="1">Web browsing behavior can predict voting results</li>
      <li v-click="2">Quantifying the 'Comey letter' (Comarela et al.)
        <ul>
          <li class="nested-gray" v-click="4">The event was too close to the election for other polling methods to detect the effect</li>
        </ul>
      </li>
    </ul>
  </div>
  <div style="flex: 1; text-align: right;" v-click="3">
    <img src="../../figures/comey-letter.png" alt="Motivation Figure" style="max-width: 100%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>