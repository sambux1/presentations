# Open: Sublinearity in $n$

<br>

<v-clicks>

The holy grail of this research direction.

</v-clicks>
<v-clicks>

- Make shuffling an efficient building block for *any* workload

</v-clicks>

<br>

<v-clicks>

Preliminary ideas:

</v-clicks>
<v-clicks>

- Generate many small correlations, then "stitch them together"
- Construct from a protocol with sublinearity in $p$
- Generate small correlations directly by materializing the permutation matrix

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Finally, we get to talk about the holy grail of this research direction. That is to generate individual permutation correlations with sublinear communication in the number of elements in the correlation.

If we could achieve this, we would make shuffling a far more efficient building block for any workload.

I don't have a construction of this, but I have some preliminary ideas.

First, if we could generate many correlations with a small number of elements with sublinear communication, then perhaps we could stitch them together. This might seem like the same problem at a smaller scale, but this path would open up some additional possibilities.

For one, it would allow us to bootstrap from a protocol that could generate many correlations with sublinear communication to one that can generate a single larger correlation with sublinear communication.

Alternatively, there are some reasons to believe that the problem becomes easier if you can materialize the permutation matrix. We can't do this typically because materializing the permutation matrix has quadratic cost in time and space, even if communication were sublinear, but at small scales this can still be practical.

I think this problem is pretty wide open, with a lot of potentially interesting approaches. I'm excited to explore this further, and I hope I've convinced you to be interested in it as well.
-->