# The Learning Algorithm

<br>

<h3 v-click="1"><strong>Input:</strong> visit and referral histograms grouped by state, state-level ground truth</h3>

<br>

<h3 v-click="2">Train–update loop until convergence</h3>
<ul>
  <li v-click="3">Assign initial predictions to each individual</li>
  <li v-click="4">Train a logistic regression model on current predictions</li>
  <li v-click="5">Compute new predictions
    <ul>
      <li class="nested-gray" v-click="6">Sort each state’s users by prediction</li>
      <li class="nested-gray" v-click="7">Set a threshold so the aggregate state prediction matches state ground truth</li>
      <li class="nested-gray" v-click="8">Assign updated individual predictions according to the threshold</li>
    </ul>
  </li>
  <li v-click="9">Repeat until predictions converge</li>
</ul>


<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>

<!--
...
-->