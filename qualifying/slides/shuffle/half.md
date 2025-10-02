# Break the Problem in Half

<br>

<v-clicks depth="2">

- Let $\pi = \pi_1 \circ \pi_0$ be a composition of random permutations
    - $P_0$ knows $\pi_0$
    - $P_1$ knows $\pi_1$
    - Neither party knows anything about $\pi$
- One party acts as a sender, the other as a receiver

</v-clicks>
<v-clicks>

<div class="absolute bottom-12 right-12" v-click="6">
  <img src="../../figures/permute-share-func.drawio.png" alt="Permute-share function" class="w-1/2 ml-auto" />
</div>

- Known as "Permute+Share"

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Our starting point is going to be to break the problem in half.

Remember that our goal is to shuffle by a permutation that neither party knows.

We can express the unknown permutation pi as a composition of two permutations, pi0 and pi1, where each party knows one of the permutations. P0 knows pi0, and P1 knows pi1.

Neither party knows anything about the composition, because the other party's permutation perfectly masks their own.

In one half of the protocol, one party will apply their permutation obliviously. We will have a sender that inputs a permutation, and a receiver that inputs a vector to be permuted. The output is a secret-sharing of the permuted input.

The "half protocol" is typically called "Permute+Share".
-->