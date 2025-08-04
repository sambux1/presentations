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
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.traditional {
  border-color: #7f8c8d;
}

.modern {
  border-color: #7f8c8d;
}

.approach-card h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #2c3e50 !important;
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
  background: white;
  border-radius: 8px;
  font-weight: 500;
  color: #2c3e50 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.vs-divider {
  font-size: 1.2rem;
  font-weight: bold;
  color: #7f8c8d !important;
  background: #ecf0f1;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  flex-shrink: 0;
}
</style>