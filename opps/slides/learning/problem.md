# Learning from Label Proportions (LLP)

<div style="display:flex; align-items:flex-start; justify-content:space-between;">
  <div style="flex:1; max-width:55%; padding-right:20px;">
    <ul>
      <li v-click="1">Each user uploads an <em>unlabeled</em> 1,034-element vector every day
        <ul>
          <li class="nested-gray" v-click="2">Number of visits to the top 517 sites</li>
          <li class="nested-gray" v-click="3">Number of times referred to the top 517 sites</li>
        </ul>
      </li>
      <li v-click="4">Unlabeled vectors are grouped by state</li>
      <li v-click="5">Each state has a ground-truth label</li>
      <li v-click="7">Train on aggregate ground truth</li>
      <li v-click="8">Predict on an individual level</li>
    </ul>
    <!-- Inference figure under the text -->
    <div style="margin-left:7rem; text-align:center;">
      <img src="../../figures/llp-inference.drawio.png" alt="LLP Inference Diagram" style="max-width:11%; height:auto;" v-click="9" />
    </div>
  </div>
  <div style="flex:1; text-align:right; display:flex; flex-direction:column; gap:1rem;">
    <img src="../../figures/llp.drawio.png" alt="LLP Diagram" style="max-width:80%; height:auto;" v-click="6" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #222222 !important;
}
</style>

<!--
Before diving into the MPC, I'll take a minute to talk about the learning problem we're trying to solve.

Every day, each user in the system is going to send us a unlabeled vector with about 1000 elements. We don't know their political preference.

The goal of the problem is to train on an aggregate ground truth

but we want to predict on an individual level. We want to know for each user who they are likely to vote for in an upcoming election.

So, what did we do?
-->