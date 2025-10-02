# Open Problems

<br>

**Goal**: Extend the line of work on PCGs into the domain of oblivious shuffling.

<br>

*We want to do to oblivious shuffling what pseudorandom correlation generators did to oblivious transfer.*

<br>

Concrete technical problems:
- Sublinearity in $\ell$ (in practice)
- Sublinearity in $p$
- Sublinearity in $n$

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Now we've seen what the state of the art looks like, and I want to take some time to talk about what I think are the most promising directions for future work in this area.

In the past few years, this field has seen the rise of pseudorandom correlation generators, which allow us to generate large volumes of preprocessed correlations with sublinear communication.

Broadly speaking, our goal is to extend the line of work on PCGs into the domain of oblivious shuffling.

In other words, we want to do to oblivious shuffling what pseudorandom correlation generators did to oblivious transfer.

OT was once considered to be pretty expensive. Now, we try to reduce as many problems as we can to OT, because OT is a cheap commodity resource. In effect, we want to commoditize permutation corrrelations.

As three concrete technical problems, we want to achieve:
- sublinearity in the bitwidth in a practical sense, and I'll cover what I mean by this in a moment
- sublinearity in the number of correlations
- and finally, what I believe is the holy grail of this line of work, sublinearity in the size of a single permutation correlation
-->