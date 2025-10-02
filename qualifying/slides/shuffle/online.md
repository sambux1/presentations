# Online Derandomization Protocol

<br>

<div style="width: 100%" v-click="1">
    <img src="../../figures/online.png" class="mx-auto" style="width: 45%">
</div>

<br>
<br>

<div v-click="2">

$$
\begin{align*}
\mathrm{output} &= \pi(\mathbf{x} - A) + C + B \\
                &= \pi(\mathbf{x} - A) + \pi(A) \\
                &= \pi(\mathbf{x}) - \pi(A) + \pi(A) \\
                &= \pi(\mathbf{x})
\end{align*}
$$

</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
I told you that we can very easily derandomize a correlation to get an online shuffle protocol, so now I'll show you what that online phase looks like.

As promised, it's just a single message.

The sender takes as input their half of the permutation correlation consisting of pi and C.

The receiver takes as input both their half of the permutation correlation and a vector x to shuffle.

The receiver uses the pseudorandom vector A to mask x and sends the masked value to the sender. The receiver outputs B and is done with the protocol.

The sender permutes its received value by pi and adds C, and that's its output.

How can we verify that this is correct? Here, correctness means that the output values form a secret sharing of pi(x). So if we add the two output shares, we can show that we get pi(x).

B plus C is just pi(A). And the permutation over x minus A can be separated into the permutation over x minus the permutation over A. The pi(A)'s cancel, and we're left with pi(x).
-->