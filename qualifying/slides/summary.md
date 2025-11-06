# Summary

<br>

<v-clicks>

#### **Vision:** Efficient secure computation involving millions of parties for complex functions.

</v-clicks>

<br>
<br>

<v-clicks depth="2">

- Oblivious shuffle as a way to increase the expressivity of MPC
    - Incorporating pseudorandom correlation generators

</v-clicks>

<br>
<br>

<v-clicks depth="2">

- Approaches to scale moderately complex workloads to thousands of parties
    - Embracing the star topology
    - Tolerating dropouts

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
Now, we've reached the end, and I want to summarize everything I've talked about and hopefully tie everything together.

The overarching vision I'm hoping to sell you on is one where we have millions of parties working together to compute complex functions of their inputs and doing so efficiently. You could imagine replacing every instance where we now send off our plaintext data to be stored on some company's server with this lightweight background MPC where you get to ensure that your data is protected because you're actively involved in the computation.

This is too big of a goal to try to solve in one shot, so we broke it and layed out some concrete directions to work toward both halves of the vision simultaneously.

On one half, we talked about oblivious shuffling as a central primitive that allows us to increase the expressivity of MPC.

And on the other half, we identified some approaches that could plausibly allow us to extend MPC over interesting classes of functions to thousands of parties.

I'm excited to explore each of these directions.
-->