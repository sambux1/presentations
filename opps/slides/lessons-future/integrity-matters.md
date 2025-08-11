# Data Integrity Matters

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 50%; padding-right: 20px;">
    <ul>
      <br>
      <li v-click="1">Trouble with dishonest reporting of location</li>
      <li v-click="2">Validation with IP addresses and geolocation</li>
      <li v-click="3">State-level results are concerning</li>
      <li v-click="4">Digging deeper on the data
        <ul>
          <li class="nested-gray" v-click="5">Users in the sample for longer are more honest</li>
          <li class="nested-gray" v-click="7">Honest users contribute much richer data</li>
        </ul>
      </li>
    </ul>
    <br>
    <br>
    <div v-click="9"><strong>Lesson:</strong> Validating and enforcing user honesty should be a priority in future deployments.</div>
    <br>
    <div v-click="10"><strong>Lesson:</strong> Our learning process is surprisingly robust to dishonest users.</div>  
  </div>
  <div style="flex: 1; text-align: right; display: flex; flex-direction: column; gap: 1rem;">
    <img src="../../figures/good_fractions.png" alt="Good Fractions" style="max-width: 100%; height: auto; margin-top: -1rem;" v-click="6" />
    <img src="../../figures/good_pies.png" alt="Good Pies" style="max-width: 80%; height: auto; align-self: flex-end; margin-right: 2rem;" v-click="8" />
  </div>
</div>


<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #222222 !important;
}
</style>