# Overview

<ul>
  <li v-click="1">We build a system for securely predicting political preferences</li>
  <li v-click="2">We collect and analyze data from almost 8000 unique users</li>
  <li v-click="3">All analysis takes place under MPC</li>
  <li v-click="4">Learning algorithm follows a train-update loop until convergence
    <ul>
      <li class="nested-gray" v-click="5">Train a logistic regression model on current predictions</li>
      <li class="nested-gray" v-click="6">Update predictions and repeat</li>
    </ul>
  </li>
</ul>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>