# MPC Backend

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; max-width: 55%; padding-right: 20px;">
    <br>
    <ul>
      <li v-click="1">We use and augment the CrypTen library</li>
      <li v-click="2">We implemented an algorithm for LLP under MPC</li>
      <li v-click="3">Three party computation with an honest majority</li>
    </ul>
  </div>
  <div style="flex: 1; text-align: right;">
    <img src="../../figures/system-design.png" alt="System Design Diagram" style="max-width: 90%; height: auto;" />
  </div>
</div>

<SlideCurrentNo class="absolute bottom-8 right-10"/>

<style scoped>
.nested-gray {
  font-size: 0.8em;
  color: #555555 !important;
}
</style>

<!--
The final component is the MPC backend.

We run the MPC in the three party setting with an honest majority.

And we build our implementation on top of the CrypTen library.

We implemented an algorithm for the learning from label proportions problem under MPC. This is the first MPC implementation of a model for this particular problem.

I'll talk more about the details of the implementation in the next slides.
-->