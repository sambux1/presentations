# Prior Work

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <br>
    <ul>
      <li v-click="1">Web browsing behavior can predict voting results</li>
      <li v-click="2">Quantifying the 'Comey letter' (Comarela et al.)</li>
      <li v-click="5">Social media referrals are the best signal</li>
      <li v-click="6">Used large plaintext dataset</li>
    </ul>
  </div>
</div>

<img class="absolute right-8 top-24" style="width: 45%" src="../../figures/comey-letter.png" v-click="3" />
<img class="absolute left-40 bottom-6" style="width: 30%" src="../../figures/comey-graph.png" v-click="4" />

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>

<!--
We're not the first to study this problem.

Prior work in both machine learning and political science has shown that web browsing behavior can predict political sentiment and voting results.

As an example that demonstrates the power of this approach to polling, 

Comarela et al. use web browsing data to quantify the effect of the 2016 "Comey Letter" on a state-by-state basis.

The Comey letter was a letter from the head of the FBI calling for an investigation into Hillary Clinton just a few days before the election. What matters to us is that the event was too close to the election for other polling methods to detect the effect in time.

You can see the impact at a state level on the right. And you can see a noticeable shift in the time series on the left.

There have been a lot of theories that the letter either did or didn't impact the election, but these claims usually don't have much data behind them. This paper was able to say that the letter mattered by approximately one percent.

They also found that social media provide the best signal.

By this, I mean not whether you visited a certain website, but whether you did so by clicking on a link on social media.

And it's worth noting that this paper used a large plaintext dataset, and privacy was not a concern of this paper.
-->