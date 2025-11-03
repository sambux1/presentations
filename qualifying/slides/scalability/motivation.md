# Motivation

<br>

<v-clicks>

**Challenge:** Suppose a secure computation involves thousands of parties.

</v-clicks>

<br>

<div class="grid grid-cols-2 gap-10 mt-6">
  <div>
    <h3 class="text-center" v-click="2">N Party Computation</h3>
    <br>
    <ul class="text-left">
      <li v-click="3">Large body of theoretical work</li>
      <li v-click="4">Prohibitive practical challenges</li>
    </ul>
  </div>
  <div>
    <h3 class="text-center" v-click="5">The Outsourced Setting</h3>
    <br>
    <ul class="text-left">
      <li v-click="6">Practical and efficient</li>
      <li v-click="7">Requires stronger trust assumptions</li>
    </ul>
  </div>
</div>

<br>
<br>

<div v-click="8">

**Goal:** Scale _practical_ MPC to thousands of parties.

</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Let's start with the fundamental challenge we're trying to address.

That is, suppose you want to run a secure computation with thousands of parties.

How can we do this? There are two primary approaches.

The first approach is just to run an MPC with thousands of parties. We know this is possible, and there's been a lot of theoretical work on the N party case of MPC.

However, to date, there have been some prohibitive practical challenges. Some of this is due to the theoretical work making unrealistic idealizing assumptions. For example, if we're managing many communication connections, then we can become bottlenecked by the slowest connection and strain performance.

But some of it is also due to a lack of MPC systems that can really address some of the main concerns.

These challenges have motivated the use of the outsourced setting of MPC, where the thousands of parties send secret shares of their inputs to a cluster of typically two or three servers and trust them not to collude. The outsourced setting is popular because it is both practical to instantiate and very efficient. But it requires significantly stronger trust assumptions.

With that in mind, our goal is to scale MPC to many more parties while retaining practical performance.
-->