# Preprocessing

<br>

<v-clicks>

Permute+Share can be broken into preprocessing and online phases.

</v-clicks>
<v-clicks>

- The preprocessing phase shuffles pseudorandom values
- The online phase derandomizes in a single message

</v-clicks>
<v-clicks>

Preprocessing produces a *permutation correlation*.


$$(\pi, C), (A, B)$$
$$\pi(A) = B + C$$

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
A crucial realization by Chase et al. was that Permute+Share can be broken into a preprocessing phase and an online phase.

In the preprocessing phase, we only need to shuffle pseudorandom values.

Then in the online phase, we can derandomize the preprocessed random correlation with a single message.

The correlation produced in the preprocessing phase is known as a permutation correlation.

A permutation correlation is a pair of tuples, where the sender gets (pi, C), and the receiver gets (A, B). The correlation is that pi(A) = B + C. In other words, the sender gets the permutation pi, the receiver gets the pseudorandom vector to be shuffled A, and the parties each get a secret share of pi(A).
-->