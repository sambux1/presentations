# Computing Anonymous IDs

<br>

<v-clicks>

BU wants to connect data from the same user over multiple days.

WashU maps IDs to anonymized IDs between $1$ and $n$.

</v-clicks>

<v-clicks depth="2">

- WashU sends all possible tags for all anonymous IDs
    - All $\texttt{(date, hash)}$ combinations
- BU aggregates data from same anonymous ID for each week

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The other half of this setup is more of a real secure computation, although it still took place my email.

For BU's output, we want the aggregation of users over weekly intervals.

What we're going to do is create anonymized IDs. WashU maps the real user IDs onto anonymized IDs between 1 and n where n is the total number of users.

Again, we're going to use the private tags. For each user, WashU computes the tag for them for each possible date, and they send that set to BU along with the anonymous ID.

From there, BU can attach an anonymous ID to each data upload, and aggregating data from the same user becomes easy.
-->