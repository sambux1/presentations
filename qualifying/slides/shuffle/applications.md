# Broader Applications

<br>

<v-clicks>

Combine aspects of the circuit model and RAM model of computation.

</v-clicks>

<v-clicks>

- A bridge between the two worlds
- Expressivity makes it central to complex workloads

</v-clicks>

<br>
<br>

<v-clicks>

How do we do it?

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
To take a step back, most MPC programs are expressed as a circuit.

But as we saw with sorting, sometimes a pure circuit approach is suboptimal.

The other extreme is to use oblivious RAM, but ORAM has its own performance issues.

What we really want is a way to opportunistically pick-and-choose between the circuit model of computation and the RAM model of computation.

Oblivious shuffle gives us this ability and acts as our bridge between the two worlds.

And it's this expressivity that makes it a central primitive for complex workloads.

Hopefully by this point I've motivated shuffle well enough that you're wondering "how do we do it?"
-->