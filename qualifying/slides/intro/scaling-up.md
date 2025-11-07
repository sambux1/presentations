<div class="flex justify-center">

# Scaling Up MPC

</div>

<br>

<div class="grid grid-cols-2 gap-10 mt-6">
  <div>
    <h4 class="text-center" v-click="1"><b>1. More sophisticated functions</b></h4>
    <br>
    <ul class="text-left ml-18">
      <li v-click="2">Oblivious shuffling</li>
      <br>
      <li v-click="3">Improving the expressivity of MPC</li>
    </ul>
  </div>
  <div>
    <h4 class="text-center" v-click="4"><b>2. Directly incorporating more parties</b></h4>
    <br>
    <ul class="text-left ml-11">
      <li v-click="5">Significant practical challenges</li>
      <br>
      <li v-click="6">Distribute trust more widely</li>
    </ul>
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The overarching theme of this talk and of my future research plans is that we want to scale up MPC.

I mean this in two senses.

First, I mean this in the sense that we want to be able to support more expressive and more sophisticated functions.

In particular, we'll be looking at a primitive known as oblivious shuffling, which appears in a wide variety of difficult workloads. For some problems, blivious shuffling can allow for much more efficient and much more natural expression under MPC.

The goal of this half of the talk is to improve the expressivity of MPC. Any computation can be performed securely, so what I mean by improving the expressivity is not enabling entirely new computations, but enabling far more natural approaches to a variety of problems. I'll hopefully convince you that oblivious shuffling is an important building block that improves our ability to translate complex functions to MPC.

For the second direction, I mean scaling up in a more literal sense. We want to directly incorporate more parties in the secure computation. MPC with, for example, thousands of parties is known to be possible from a theoretical standpoint, but this scale has been elusive in practice.

The reason we want to scale to directly incorporate more parties is that it allows us to distribute the trust more widely than we could if we have a small set of servers with a non-collusion assumption.

I think both of these directions are necessary to help MPC take that next step toward practicality and deployment.
-->