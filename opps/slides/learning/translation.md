# Translating to MPC

<br>
<br>

<div class="flex items-start gap-5">
  <div style="width: 55%">

  ```
  initialize_labels()
  
  repeat until convergence:
      # [!code word:train]
      model = train(data, labels)
      # [!code word:inference]
      predictions = inference(model, data)
      
      for each state:
          # [!code word:compute_threshold]
          compute_threshold(truth[state], predictions[state])
      
      for each user:
          # [!code word:>=]
          labels[user] = predictions[user] >= thresholds[state]
  ```

  </div>

  <div style="width: 40%">
    <ul class="list-disc pl-6 text-sm leading-relaxed">
      <br>
      <li v-click>Plaintext initialization</li>
      <br>
      <li v-click>Training and inference as black boxes</li>
      <br>
      <li v-click>Computing thresholds requires oblivious sorting</li>
      <br>
      <li v-click>Updating labels requires oblivious comparison</li>
    </ul>
  </div>
</div>

<br>

<p v-click style="margin-top: -0.5rem">Convergence Check</p>
<ul style="margin-left: 2rem" class="text-sm">
  <li v-click>Vector oblivious comparison</li>
  <li v-click>Sum the comparison results</li>
  <li v-click>Compare sum with convergence threshold</li>
</ul>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style>
.highlighted-word {
  background-color: #facc15; /* yellow background */
  border-radius: 2px;
  padding: 0 2px;
}
</style>

<!--
Here is that same algorithm expressed in pseudocode.

We can use the same pseudocode for both the plaintext and MPC algorithms, but we need to replace individual components, those highlighted in yellow, with their oblivious counterparts.

I'll go through each step and show how we translate it to MPC.

First, we initialize the labels, and this can be done in plaintext. The initialization is either randomized or fixed based on the user's state.

The next step is to train a model with the current labels and run inference on the data using the new model. Machine learning under MPC is complex and there's been a ton of work on this, so we just use the existing work as a black box and state that it can be done under MPC.

The key step in updating the labels in each iteration is to determine the threshold separating a Democratic prediction from a Republican prediction. This involves computing percentiles, which effectively requires oblivious sorting, making this a very expensive step. More to come on that point.

Then we need to actually update the labels for each user by comparing it with the state threshold. This can be done with a simple oblivious comparison circuit.

Finally, we need to check for convergence after every iteration to tell when we should stop the training. All we reveal is whether we should stop or not, so a single bit. We do this by taking the current label vector and comparing it with the last label vector, giving us a vector of bits indicating which indices are the same as the last iteration. We can sum the result vector and then do a single comparison between the sum and a convergence threshold. Then we reveal the result of that final comparison.
-->