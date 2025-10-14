# Scalability

<br>
<br>

<div class="flex justify-center">
    <img style="width: 100%" src="../../figures/scalability.png">
</div>

<callout x="50" y="20" v-click="1">

  Theoretical overhead $\approx 11 \times$

</callout>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Aside from raw performance numbers, the other main goal of this work was to show that we can scale the system up to larger and larger queries.

Here, we ran each query in the TPC-H benchmark at scale factor 1 and scale factor 10, and we plot the overhead of the larger input sizes.

Theoretically with n log n scaling, we expect the overhead to be about 11x. This is almost exactly what we see on average, although there's quite a bit of fluctuation on individual queries.

The takeaway here is that if we just throw more resources at the problem, meaning more time and more memory, then we can continue to scale up to larger and larger sizes without the system getting in the way.

Of course, there's still a ton of work to do to decrease the concrete costs in time and memory.
-->