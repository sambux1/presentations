# Liu et al. Truncation Protocol

<br>

<v-clicks>

- Division by a public power of two

</v-clicks>

<br>

<v-clicks>

Almost all truncation protocols either

</v-clicks>
<v-clicks>

- Require an arithmetic-to-binary conversion
- Require "slack bits" to prevent a "catastrophic" error

</v-clicks>
<br>

<v-clicks>

The Liu et al. protocol is both constant-round and requires only 1 bit of slack.

</v-clicks>
<v-clicks>

- In a Mersenne prime field, the catastrophic error is predictable and can be corrected for

</v-clicks>
<br>

<v-clicks>

The paper simultaneously minimizes total work and makes base operations constant-round.

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
In the interest of time, I'm only going to talk about one of the subprotocols, and that's the truncation protocol.

A truncation protocol is used to divide a secret-shared value by some public power of two value. This is typically couple with fixed-point arithmetic. For example, if you have two fixed-point values with, say, 10 bits of fractional precision, then by multiplying the two values, you now have a value with 20 bits of fractional precision, and you need to divide that number by 2 to the 10th to return to the same scale as the input.

There's been a ton of work in the privacy-preserving machine learning literature on truncation protocols. There's typically assumed to be a tradeoff, where truncation protocols can either be fast or accurate, with a lot of work exploring the tradeoff but none doing both.

To be a bit more specific, one common approach is to just convert from an arithmetic sharing to a binary sharing, but this is quite expensive. Alternatively, there are approaches that are fast and run in constant rounds, but they carry with them a risk of what's known as a catastrophic error, or an error that just randomizes the output and can break the correctness of the computation. To prevent these catastrophic errors, the solution is typically to use a field or ring that is far larger than it otherwise would need to be, because this makes these probabilistic errors very unlikely to happen.

The protocol by Liu et al. is interesting because it doesn't need either of these things. The protocol runs in a single round with only a single bit of slack, so we can get away with using, for instance, 32 bit values, instead of 128 bit values.

The insight that allows them to achieve this is that in a Mersenne prime field, rather than a catastrophic error fully randomizing the output, it perturbs the output in a way that is predictable and can be corrected for by obliviously checking for a certain set of conditions, and the check and correction can be done efficiently.

The important takeaway from this paper is that they're able to simultaneously minimize the total work and keep all base operations constant round. This combination allows the protocol to scale well to dozens of parties for complex workloads like inference.
-->