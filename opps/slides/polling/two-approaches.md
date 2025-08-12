---
layout: center
---

<div class="center">
    <h1>Two Approaches to Political Polling</h1>
</div>

<div class="comparison-container">
  <div class="approach-card traditional" v-click="1">
    <h3>Traditional Polling</h3>
    <div class="features">
      <div class="feature">Slow</div>
      <div class="feature">Expensive</div>
      <div class="feature">Coarse-grained insights</div>
    </div>
  </div>
  
  <div class="vs-divider" v-click="2">VS</div>
  
  <div class="approach-card modern" v-click="2">
    <h3>Web Behavior Analysis</h3>
    <div class="features">
      <div class="feature">Immediate</div>
      <div class="feature">Cheap</div>
      <div class="feature">Fine-grained insights</div>
    </div>
  </div>
</div>

<br>

<div class="center" v-click="3">
    <h2>What about privacy?</h2>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style>
.center {
  text-align: center;
}

.comparison-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 0.5rem;
}

.approach-card {
  flex: 0 0 380px;
  background: #e9ecef;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.traditional {
  border-color: #495057;
}

.modern {
  border-color: #495057;
}

.approach-card h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #212529 !important;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.feature {
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  font-weight: 500;
  color: #212529 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
}

.vs-divider {
  font-size: 1.2rem;
  font-weight: bold;
  color: #495057 !important;
  background: #dee2e6;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  flex-shrink: 0;
}
</style>

<!--
To summarize, I'll compare the traditional approach to polling with one based on collecting web browsing data.

Traditional polling is
- slow and expensive, because data is a human-intensive process
- the results we get are coarse-grained, we only learn whether you support candidate A or B, but not the data informing the choice

In contrast, a system based on analyzing web browsing data can be fully automated
- which gives us immediate results
- and is cheap, allowing us to scale to much more data
- the results are much more fine-grained because we collect much richer data

The richness of the data poses the following question
- what are we going to do about privacy?

Clearly, we don't want to be collecting all this data in plaintext.
- can we predict political preferences while respecting user privacy?
-->