# Looking Ahead to 2028

<br>

<v-clicks>

- Anonymous payments
- More fine-grained data
- Redesigning the inference pipeline
- Scaling the training pipeline

</v-clicks>

<img class="absolute bottom-10 left-1/2 -translate-x-1/2" src="../../../figures/live-training.png" style="width:75%" v-click="5">

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<!--
To wrap up this first part of the talk, let's look into the future a bit.

We want to run this project again. 2026 is a little bit too close to make any meaningful changes, so we're setting our sights on the 2028 elections, both the general election and the primaries.

There are four major changes that we're exploring as we build the next version.

With all the work we put into the payment system to get something that's still not private, one focus will be on integrating anonymous payments.

Aside from that, we want to collect more fine-grained data, while respecting user privacy. I'll come to what this means in a moment.

We want to redesign and rebuild the inference pipeline to take advantage of the fact that inference is an easier problem than training.

Third, we want to scale up the training pipeline to be able to accommodate more users and a larger sample.

Before I get to these points, I want to note that in this past deployment, due to time constraints, we ended up collecting all our data first and then analyzing it after the fact.

In this next election, we want live predictions. So we want our output to be something like this, with live predictions that can hopefully compete directly with other polling methods. This means we need daily inference, and we need some kind of periodic retraining on all our new data.
-->