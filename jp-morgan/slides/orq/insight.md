# Our Insight

<br>

<v-clicks>

The general problem of oblivious joins is impractically difficult.

<u>**Practical instances are not!**</u>

Common queries impose an $O(n)$ bound on the output size.

Joins with incremental aggregations can avoid the quadratic blowup.

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Our core insight is that while the general problem of oblivious joins is impractically difficult, practical instances of the problem are not.

We can observe that real queries always impose a linear bound on the size of the output. This is because we essentially always run some kind of aggregation after a join to make the results meaningful.

This means that there is only a quadratic blowup in an intermediate step.

The key idea is that if we have a certain type of aggregation, like an incremental or decomposable aggregation, then the quadratic blowup can be avoided entirely.

The distinction with prior work is that while prior work introduced bounds on the intermediate result size or leaked the intermediate result size, we can avoid materializing the intermediate result entirely.
-->