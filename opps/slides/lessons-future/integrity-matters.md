# Data Integrity Matters

<ul>
  <li v-click="1">Our initial advertisement targeted users in the swing states
    <ul>
      <li class="nested-gray" v-click="2">Incentive to report location dishonestly</li>
    </ul>
  </li>
  <br>
  <li v-click="3">We use IP addresses and geolocation data to validate the data
    <ul>
      <li class="nested-gray" v-click="4">98% of users are located in the United States</li>
    </ul>
  </li>
  <br>
  <li v-click="5">State-level results are concerning
    <ul>
      <li class="nested-gray" v-click="6">85% of users reported their state dishonestly</li>
      <li class="nested-gray" v-click="7">15% of users reported an invalid ZIP code for their state</li>
    </ul>
  </li>
</ul>

<br>
<br>

<div style="margin-left: 2rem;" v-click="8"><strong>Lesson:</strong> Validating and enforcing user honesty should be a priority in future deployments.</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>