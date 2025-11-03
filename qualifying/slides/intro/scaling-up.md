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

For those of you that have tried to write MPC programs using some framework or library, you probably know that each library has a set of operations that are supported out of the box and that are easy to use, but if you need functionality beyond that base set of operations, it very quickly become a nightmare and set you back by weeks or months of development time. This problem arises frequently when implementing complex operations that don't trivially reduce to a simple set of components.

In particular, we'll be looking at oblivious shuffling, which is a primitive that pops up in a wide variety of difficult workloads. I'll hopefully convince you that oblivious shuffling is an important building block that improves our ability to translate complex functions to MPC. The goal of this half is to improve the expressivity of MPC.

For the second direction, I mean scaling up in a more literal sense. We want to directly incorporate more parties in the secure computation. MPC with, for example, thousands of parties is known to be possible from a theoretical standpoint, but this scale has been elusive in practice.

The reason we want to scale to directly incorporate more parties is, that way we can distribute the trust more widely than we could if we have a small set of servers with a non-collusion assumption.

I think both of these directions are necessary to help MPC take that next step toward practicality and deployment.
-->