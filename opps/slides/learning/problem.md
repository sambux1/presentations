# The Problem

<h3 v-click="1">Data</h3>
<ul>
  <li v-click="2">Each user uploads an <em>unlabeled</em> 1,034-element vector every day
    <ul>
      <li class="nested-gray" v-click="3">Number of visits to the top 517 sites</li>
      <li class="nested-gray" v-click="4">Number of social-media referrals to the top 517 sites</li>
    </ul>
  </li>
</ul>

<br>

<h3 v-click="5">The Learning from Label Proportions (LLP) Problem</h3>
<ul>
  <li v-click="6">Unlabeled vectors are grouped by state</li>
  <li v-click="7">Each state has a ground-truth label</li>
  <li v-click="8">Train on aggregate ground truth</li>
  <li v-click="9">Predict on an individual level</li>
</ul>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>