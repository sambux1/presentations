# Scaling Up Training

- 2k $\to$ 10k clients
-
- Bottleneck: oblivious sorting

<div style="float: right">
```mermaid {scale: 0.6}
pie title
    "Sorting" : 120
    "Logistic Regression" : 85
    "Other" : 15
```
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
The more difficult half of this project is training the models, because training creates dependencies between clients, so we can no longer treat clients independently.

Regardless of which cryptographic techniques we use for training, we're going to have to scale up oblivious sorting.

And I want to use that point to segue into the second half of this talk, which is about oblivious sorting and ORQ.
-->