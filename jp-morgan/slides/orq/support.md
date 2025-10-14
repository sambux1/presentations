# What Can We Support?

<br>

<div class="flex justify-center">
    <img style="width: 100%" src="../../figures/join-categories.png">
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
To summarize and show how this new algorithm fits into the bigger picture, here is a diagram showing the space of all possible joins.

This left box is one to many joins. As a reminder, this means that one of the tables has unique keys. This class of joins has been supported by prior work.

The general problem of many to many joins is still impractically difficult. However, essentially all real world queries of interest follow a join with an aggregation, and this aggregation is typically decomposable.

An aggregation function is decomposable if we can divide the input in parts, run the function on each part, and then run the function again on the results of each part. For example, the sum function is decomposable.

Finally, our algorithm applies to the subset of joins followed by decomposable aggregations where all keys exist in one of the tables.

At this point it may seem like I'm splitting hairs, but I just want to emphasize that complex queries from real world use cases almost all fall in this category, which means we're the first to evaluate some of these queries without introducing leakage.
-->