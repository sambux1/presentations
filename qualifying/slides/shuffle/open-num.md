# Sublinearity in $p$

<br>

<v-clicks>

Can we "chop up" a correlation with large $\ell$ into many correlations with small $\ell$?

</v-clicks>
<v-clicks>

- Very challenging
- Can define a *stateful rerandomization* ideal functionality that captures the intended behavior

</v-clicks>

<br>

<v-clicks>

Application: relational analytics

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Another really interesting and somewhat more ambitious goal is to get sublinearity in the number of correlations.

One way of achieving this would be to somehow chop up a single correlation with a large bitwidth, generated with sublinear communication, into many correlations with a smaller bitwidth.

This seems very challenging. Believe me, I've spent a lot of time working on this already, and I'll my ideas so far have fallen apart in new and exciting ways each time. I won't go into these failures, but I'll say that I've defined an ideal functionality for something we can call stateful rerandomization of a permutation correlation that, if we were able to achieve this ideal functionality, would give us the desired behavior.

The main application of this type of construction would be relational analytics. In relational analytics, you need many correlations with different underlying permutations.
-->