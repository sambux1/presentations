# Scaling the King Party

<br>

<v-clicks>

Proposal: Lean into the king as the bottleneck.

</v-clicks>
<v-clicks>

- Powerful central server, weak ephemeral clients
- One logical king, multiple servers
- GPU acceleration

</v-clicks>

<img src="../../figures/scaling-king.png" class="absolute bottom-20 right-50" style="width: 15%" v-click="3">

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
First, let's look at the bottleneck in the LAN setting, which is the local computation on the king party. While this local computation is not a bottleneck in the WAN setting, as we scale to more and more parties, it could plausibly become a problem, so solving this bottleneck can be beneficial in all network environments.

One option would be to try to load balance the king role, so multiple parties act as the king simultaneously.

However, instead I'm going to propose that we take the local computation bottleneck on the king, and lean into it.

In MPC, sometimes we look at local computation bottlenecks and we don't know what to do. But improving the performance of local computation is what a lot of the rest of computer science is about. So this is actually a good thing, because it's a problem we know how to solve.

My proposal is to create a system setup where we have a powerful central server and many weak clients that are only guaranteed to be connected for a short period of time. In this setting, we want to be bottlenecked by the king party, because we know how to scale the king party.

One way to achieve this scaling is to just take advantage of the inherent parallelism is doing the same operation for each parallel gate, and we can run the computation across a cluster of machines that act as a single logical party.

Alternatively, or additionally, we could use hardware acceleration to take advantage of this same parallelism.
-->