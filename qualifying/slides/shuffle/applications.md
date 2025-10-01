# Broader Applications

<br>

<v-clicks>

Other applications:

</v-clicks>

<v-clicks>

- Database analytics
- Machine learning

</v-clicks>

<br>

<v-clicks>

Combine aspects of the circuit model and RAM model of computation.

</v-clicks>

<v-clicks>

- A bridge between the two worlds
- Expressivity makes it central to complex workloads

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Aside from oblivious sorting, oblivious shuffle has found many other applications, particularly to complex workloads.

To list off a few, shuffling is central to database analytics, it has various applications within secure machine learning, and it gives us a way of expressing graph algorithms in MPC.

I won't go into too much detail about graphs, but on the right we can represent a graph as a list that allows us to compute on it obliviously. The key idea is that there are operations that can be performed obliviously on the list, but doing them efficiently requires the graph to be in specific orderings. Shuffling allows us to transform between these orderings.


-->