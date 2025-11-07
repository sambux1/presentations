# Future: Tolerating Dropouts

<br>

<v-clicks>

Problem: Slowest connection becomes the bottleneck.

Proposal: Embrace the threshold scheme to tolerate dropouts.

</v-clicks>
<v-clicks>

- Subset of Fluid MPC
- Semi-honest security is straightforward
- Malicious security is more complex

</v-clicks>

<img src="../../figures/dropout.png" class="absolute bottom-6 left-1/2 transform -translate-x-1/2" style="width: 60%" v-click="2">

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Scaling the king party will solve one important bottleneck, but there's still one more big one to consider.

The second major problem to address to scale to thousands of parties is that we'll always be bottlenecked by the slowest connection among parties, and as we scale the number of parties further and further, the random fluctuation here is going to make this bottleneck worse and worse.

My proposed solution is to tolerate some number of dropouts by embracing the threshold nature of the secret sharing scheme. If some parties are very slow or if they get disconnected for any reason, we don't actually need them to carry on to the next operation in the computation.

If we set our honesty thresholds appropriately, we can afford to lose or ignore some number of honest participants without losing an honest-majority guarantee.

This idea has a lot of similarity with Fluid MPC, but there are some differences. Importantly, we're only interested in a subset of the behavior supported by Fluid MPC, namely dropouts without additions. Also, our invariant here is going to be performance, so we'll add complexity to the protocol to achieve dropout tolerance only insofar as it retains or even ideally improves performance. Whereas Fluid MPC is primarily a theoretical model, where making it practically efficient is in a sense a secondary goal.

Finally, I want to mention that this idea of tolerating dropouts in the semi-honest case is fairly straightforward, but in the malicious case it's considerably more challenging and will probably involve some interesting algorithmic changes.
-->