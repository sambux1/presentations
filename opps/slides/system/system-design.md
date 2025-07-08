# System Design

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
<div style="flex: 1; padding-right: 20px;">

<br>

<h3 v-click="2">Users</h3>
<ul>
  <li v-click="3">built a Chrome plugin to monitor web behavior</li>
  <li v-click="4">client-side secret sharing and encryption</li>
</ul>

<br>
<br>

<h3 v-click="5">Intermediate webserver</h3>
<ul>
  <li v-click="6">simplifies interaction with users</li>
  <li v-click="7">collects basic metadata</li>
</ul>

<br>
<br>

<h3 v-click="8">MPC backend</h3>
<ul>
  <li v-click="9">trains a model on the data</li>
  <li v-click="10">we use and augment the CrypTen MPC library</li>
</ul>

</div>
<div style="flex: 1; text-align: right;" v-click="1">
<img src="../../figures/system-design.png" alt="System Design Diagram" style="max-width: 100%; height: auto;">
</div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>
