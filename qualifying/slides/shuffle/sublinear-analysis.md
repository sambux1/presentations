# Analysis of the Sublinear Protocol

<br>

<v-clicks depth="2">

- $O(n \log \ell)$ total communication
- Efficient only for very long $\ell$
- Crossover point is $\ell \approx 4000$
- Application: graph algorithms
    - Requires thousands of bits of permutation correlations

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The key selling point of this protocol is the ability to reduce asymptotic communication from Oh of n times ell to Oh of n times log ell.

There are pretty large constant factors here. After all, we have to run the entire linear-time construction as a subroutine to generate the base randomness. So this protocol is only going to be efficient for very long correlations, typically many thousands of bits.

The paper that proposed this didn't actually include an implementation. I actually have the first implementation of this construction. And I can say that empirically, the crossover point where this construction is faster than the prior construction is somewhere around 4000 bits in the local area network setting.

This might seem like a not terribly useful construction, and in many instances it's not, but I want to highlight one instance where it could be quite useful, and that application is graph algorithms. In oblivious graph algorithms, as I mentioned earlier, we need to shuffle back and forth between different views of an adjacency list, and we're applying the same permutation each time, or a permutation and its inverse each time.
-->