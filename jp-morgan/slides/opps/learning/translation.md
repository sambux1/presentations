# Translating to MPC

<br>
<br>

<div class="flex items-start gap-5">
  <div style="width: 55%">

  ```
  initialize_labels()
  
  repeat until convergence:
      model = train(data, labels)
      predictions = inference(model, data)
      
      for each state:
          compute_threshold(labels[state], predictions[state])
      
      for each user:
          labels = predictions[user] >= thresholds[state]
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