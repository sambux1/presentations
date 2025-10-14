# Connection to Oblivious Sorting

<br>

<v-clicks>

Queries consist of joins, joins consist of (many) sorts.

</v-clicks>

<v-clicks>

- 12 sorts for TPC-H Q21

</v-clicks>

<v-clicks>

Sorting is no longer the main bottleneck!

</v-clicks>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
I spent a lot of this talk on oblivious sorting, so now we're going to see why that matters.

Complex queries consist of joins, typically multiple, and joins consist of many sorts, as we saw with our join-aggregation operator.

As an example, query 21 from the TPC-H benchmark requires 12 sorts. At the largest input size that we benchmark, these 12 sorts are running on input sizes of up to 120 million rows.

At the beginning of this work, we were entirely bottlenecked by sorting. Now, we've actually done so much work on sorting that it's no longer the main bottleneck. Our end to end times are now roughly split between sorting and aggregation. We see this as a pretty big success for our work on sorting.
-->