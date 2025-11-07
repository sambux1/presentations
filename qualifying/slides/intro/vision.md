<div class="flex justify-center">

# The Vision

</div>

<br>

<div class="flex flex-col items-center gap-y-3">
    <p v-click="1">Efficient secure computation involving millions of parties for complex functions.</p>
    <br>
    <p v-click="2"><b>Part 1:</b> For a fixed system model, improve the efficiency of a complex building block.</p>
    <br>
    <p v-click="3"><b>Part 2:</b> For a moderately complex workload, scale the number of parties.</p>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The long-term vision would be to have efficient secure computation with millions of parties evaluating complex functions.

You can think of the current state of MPC as having two out of the three of efficiency, many parties, and complex operations, where any two preclude the third. The goal is to have all three simultaneously, and there's nothing stopping us from achieving this, except that we just have to do the work.

This is too big of a problem to try to solve all in one shot, so we're going to have to chip away at it. This talk focuses on two technical challenges that chip away at the bigger problem from different directions.

In part 1 of this talk, we're going to fix a system model, and we'll choose the two party setting, and our goal is to improve the efficiency of a fundamental and complex building block, oblivious shuffling.

In part 2, we're instead going to choose a moderately complex workload, not too complex but not trivial either, and our goal is to scale up the number of parties.

Part 1 will be heavier on the cryptography side of things, and part 2 will be heavier on the systems side.

With that said, let's get started on part 1 of the talk...
-->