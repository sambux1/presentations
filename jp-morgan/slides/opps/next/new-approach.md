# A New Inference Approach

<br>

<v-clicks depth="2">

- Users can be treated independently
- Run inference locally, aggregate
    - Secure aggregation
    - Work-in-progress open source implementation
- Attach ZK proofs of correct inference evaluation

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Another cool direction we're working on is an entirely new approach to inference based on different primitives to distribute trust more widely.

The key observation is that, unlike training, users can be treated entirely independently. We can have users run inference locally, and all we need to do is aggregate results.

This is probably ringing some bells, given some of the work that this lab has done. The primitive we're going to be relying on is secure aggregation.

I'm currently working on an implementation of a few of the recent secure aggregation protocols, including OPA, and I'll be open sourcing this as soon as I have something reasonably complete.

Finally, since we're now doing more of the computation on the client side, if we want to get some integrity guarantees on the data, we can have clients attach zero-knowledge proofs that the inference was evaluated correctly on their data.
-->