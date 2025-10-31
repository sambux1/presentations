# Scaling Up Training

<br>

<v-clicks depth="2">

- 2k $\to$ 10k clients
- Bottleneck: oblivious sorting
    - 1 minute per 10,000 elements

</v-clicks>

<callout x="35" y="50" v-click="4">

State of the art is $1000\times$ faster!

</callout>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The more difficult half of the learning process is training the models, because training creates dependencies between clients, so we can no longer treat clients independently.

We want to be able to support more users. Just to throw some numbers around, say we want to scale from 2 thousand daily active users to 10 thousand.

The performance bottleneck in this current deployment is oblivious sorting. The current implementation, which was not optimized for performance, can process about 10 thousand elements per minute.

This is about a thousand x away from the state of the art.

You may be wondering what that state of the art is?

So, I want to now segue into the second half of this talk, which is about oblivious sorting and ORQ.
-->