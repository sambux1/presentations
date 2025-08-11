# The Plaintext Algorithm

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
  color: #222222 !important;
}
</style>

<!--
To implement an LLP model under MPC, we first need to talk about the plaintext algorithm that it corresponds to.

As a reminder, the input to the model is a group of unlabeled histograms grouped together by state, where each state has a ground-truth label.

The learning algorithm follows a train update loop until it converges.

First we compute some initial predictions for each individual. This can either be random or based on their state's label, but either way it's based on publicly available information.

Next, we train a logistic regression model using the current predictions as the labels.

And we use the logistic regression model to compute new predictions. To do so, we sort each state's users by their prediction, set a threshold for the output so the aggregate prediction matches the ground truth, and then we upate individual predictions by comparing them with the threshold.

So, after this step, if a state voted 60% Democratic in the election, we would assign a Democrat label to the 60% of users predicted to be most likely to vote Democratic.

We repeat this process until the predictions converge.
-->