# The Learning Process

<br>

<v-clicks>

We're working with the learning from label proportions (LLP) problem.

</v-clicks>

<v-clicks>

- The first implementation under MPC of an LLP model
- Mix of out-of-the-box components and custom implementations

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
So, let's turn now to the learning process.

The problem that we're interested in is the Learning from Label Proportions problem, or the LLP problem.

I'll define this problem and show a plaintext algorithm to solve it, and then I'll show to translate the plaintext algorithm to MPC.

To our knowledge, this is the first implementation under MPC of a model for this particular problem.

Our implementation builds on the CrypTen library, and as a result, we're able to take advantage of a lot of existing building blocks. But there are some pieces that we have to implement from scratch.
-->